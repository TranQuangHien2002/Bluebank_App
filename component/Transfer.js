import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Transfer = ({ navigation }) => {
const [userData, setUserData] = useState(null);
  const [transferAmount, setTransferAmount] = useState('');
  const [targetAccount, setTargetAccount] = useState('');
  const apiUrl = 'https://654cc15277200d6ba8595b20.mockapi.io/bluebank';
  useEffect(() => {
    const getUserData = async () => {
      // Lấy thông tin người dùng đã đăng nhập từ AsyncStorage
      const userData1 = await AsyncStorage.getItem('user');
      setUserData(JSON.parse(userData1));
    };

    getUserData();
  }, []);



  const handleTransfer = async () => {
    try {
      // Check balance before making the transfer
      if (userData.moneyLife < parseInt(transferAmount)) {
        alert('Số dư không đủ để thực hiện giao dịch.');
        return;
      }
  
      // Deduct money from the source account
      const deductResponse = await axios.put(`${apiUrl}/${userData.id}`, {
        moneyChoice: userData.moneyChoice - parseInt(transferAmount),
      });
  
      // Find the target user
      const targetUser = await axios.get(`${apiUrl}?soTK=${targetAccount}`);
      if (targetUser.data.length === 0) {
        // Target account not found
        alert('Tài khoản đích không tồn tại.');
        return;
      }
  
      // Add money to the target account
      const addResponse = await axios.put(`${apiUrl}/${targetUser.data[0].id}`, {
        moneyChoice: targetUser.data[0].moneyChoice + parseInt(transferAmount),
      });
  
      // Log the responses (for debugging purposes)
      console.log('Deduct response:', deductResponse.data);
      console.log('Add response:', addResponse.data);
  
      // If you want to update the local state with the new data from the server, you can do that here
      // setUserData(response.data);
  
      // Navigate to the next screen
      navigation.navigate('Pay4');
    } catch (error) {
      console.error('Error during the transfer:', error);
  
      // Rollback the transaction if the deduct operation was successful but the add operation failed
      if (error.response && error.response.status === 500) {
        // Rollback the deducted amount from the source account
        await axios.put(`${apiUrl}/${userData.id}`, {
          moneyChoice: userData.moneyChoice + parseInt(transferAmount),
        });
  
        alert('Giao dịch không thành công.');
      } else {
        // Log the detailed error response from the server (for debugging purposes)
        if (error.response) {
          console.log('Server error response:', error.response.data);
        }
      }
    }
  };
  const handleGoBack = () => {
    navigation.goBack(); //Quay lại màn hình trước đó
};

return (
    <View style={styles.container}>
        <View style={styles.container1}>
            <TouchableOpacity style={styles.arrowIcon} onPress={handleGoBack}>
                <Image source={require('../assets/muiTen.png')} style={styles.arrowImage} />
            </TouchableOpacity>
            <View style={styles.containerRectangle}>
                <Text style={{ fontSize: 18, fontWeight: 700 }}>Chuyển tiền giữa các tài khoản</Text>
            </View>
        </View>
        <View style={styles.container2}>
        <Text style={[styles.title,{marginTop: 30}]}>Từ Bluebank Choice</Text>
        {userData && (
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Bluebank Choice</Text>
                <Text style={styles.balance}>VND {userData.moneyChoice.toLocaleString('en-US')}</Text>
            </View>
        )}


        <Text style={styles.title}>Số tiền</Text>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Nhập số tiền..."
                keyboardType="numeric"
                value={transferAmount}
                onChangeText={(text) => setTransferAmount(text)}
            />
            <Text style={styles.vndText}>VND</Text>
        </View>

        <Text style={{ fontSize: 14, fontWeight: 500, marginTop: 20 }}>Số TK</Text>
        <View style={styles.inputContainer}>
        <TextInput
            style={{borderWidth: 1,
                borderColor: '#e1e1e1',
                borderRadius: 4,
                padding: 10,
                marginTop: 10,
                flex: 1,}}
          placeholder="Nhập số tài khoản đích"
          onChangeText={(text) => setTargetAccount(text)}
        />
        </View>
        </View>

        <View style={styles.container3}>
    <TouchableOpacity style={styles.startButton} onPress={handleTransfer}>
      <Text style={styles.startButtonText}>Chuyển tiền</Text>
    </TouchableOpacity>
  </View>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
},
title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
},
card: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 4,
    padding: 15,
    marginTop: 10,
},
cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
},
balance: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
},
input: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    flex: 1,
},
transferButton: {
    backgroundColor: '#0055F9',
    padding: 15,
    borderRadius: 4,
    marginTop: 20,
},
transferButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
},
inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
input: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    flex: 1,
},
vndText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
},
arrowImage: {
    width: 24,
    height: 24,
},
arrowIcon: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
},
container1: {
    flexDirection: 'row',
    alignItems: 'center',
},
containerRectangle: {
    marginLeft: 20,
    flex: 33,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
},
container3: {
    flex: 1,
},
startButton: {
    width: '100%',
    height: 60,
    backgroundColor: '#0055F9',
    padding: 18,
    borderRadius: 50,
    marginTop: 50
},
startButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
},
container2:{
    flex: 4,
}
});

export default Transfer;
