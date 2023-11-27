import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Pay2Screen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      // Lấy thông tin người dùng đã đăng nhập từ AsyncStorage
      const userData1 = await AsyncStorage.getItem('user');
      setUserData(JSON.parse(userData1));
    };

    getUserData();
  }, []);
  const formatMoney = (amount) => amount.toLocaleString('en-US');



  const handleGoBack = () => {
    navigation.goBack(); //Quay lại màn hình trước đó
  };

  const handleContinue = () => {
    navigation.navigate('Pay3')
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
        <Text style={{ fontSize: 18, fontWeight: 700, marginTop: 30 }}>Đến</Text>
        {userData && (
          <View style={{ ...styles.card, backgroundColor: '#E2F3FF', borderWidth: 2, borderColor: '#0055F9' }}>
            <Text style={styles.cardTitle}>Bluebank Life</Text>
            <Text style={styles.balance}>VND {formatMoney(userData.moneyLife)}</Text>
            <Text style={styles.details}>BSB 123-234      số dư</Text>
            <Text style={styles.details}>Số tài khoản {userData.soTK}</Text>
          </View>
        )}
      </View>

      <View style={styles.container3}>
        <TouchableOpacity style={styles.startButton} onPress={handleContinue}>
          <Text style={styles.startButtonText}>Tiếp theo</Text>
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
    card: {
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 4,
        padding: 15,
        marginVertical: 10,
        width: '80%',
        marginBottom: 0,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    balance: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    details: {
        fontSize: 16,
        color: '#646464',
        marginBottom: 5,
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

export default Pay2Screen;
