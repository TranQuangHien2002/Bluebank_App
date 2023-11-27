import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TransferScreen = ({navigation}) => {
    const apiUrl = 'https://65637199ee04015769a735e3.mockapi.io/BlueBank';
    const [userData, setUserData] = useState(null);
    const [transferAmount, setTransferAmount] = useState('');

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
            // Make the transfer request
            const response = await axios.put(`${apiUrl}/${userData.id}`, {
                moneyChoice: userData.moneyChoice - parseInt(transferAmount),
                moneyLife: userData.moneyLife + parseInt(transferAmount),
            });

            // Log the response (for debugging purposes)
            console.log('Transfer response:', response.data);

            // If you want to update the local state with the new data from the server, you can do that here
            // setUserData(response.data);
            navigation.navigate('Pay4')

        } catch (error) {
            console.error('Error updating data:', error);

            // Log the detailed error response from the server (for debugging purposes)
            if (error.response) {
                console.log('Server error response:', error.response.data);
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

            <Text style={styles.title}>Đến Bluebank Life</Text>
            {userData && (
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Bluebank Life</Text>
                    <Text style={styles.balance}>VND {userData.moneyLife.toLocaleString('en-US')}</Text>
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

            <Text style={{ fontSize: 14, fontWeight: 500, marginTop: 20 }}>Ghi chú(Tùy chọn)</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
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

export default TransferScreen;
