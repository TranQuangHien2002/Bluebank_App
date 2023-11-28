import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Button, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        const getUserData = async () => {
          // Lấy thông tin người dùng đã đăng nhập từ AsyncStorage
          const userData1 = await AsyncStorage.getItem('user');
          setUserData(JSON.parse(userData1));
        };
    
        getUserData();
      }, []);


    const formatMoney = (amount) => amount.toLocaleString('en-US');

    // Fetch data when the screen is focused

    const renderCard = (title, money) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.balance}>số dư:  {formatMoney(money)} VND</Text>
            <Text style={styles.details}>BSB 123-234</Text>
            <Text style={styles.details}>Số tài khoản {userData.soTK}</Text>
        </View>
    );
    
    useEffect(() => {
        // Display the modal when the screen is created
        toggleModal();
    }, []);
    
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'flex-start', padding: 20, backgroundColor: 'white', flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                    <Image style={{ width: 138, height: 35, left: 10 }} source={require('../assets/logomini.png')} />
                    <TouchableOpacity style={{ marginTop: 10, backgroundColor: 'transparent', alignItems: 'center' }} onPress={() => navigation.navigate('GetStarted')}>
                        <Text style={{ color: '#0055F9', fontSize: 18, fontWeight: '600' }}>Đăng Xuất</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: '#F5F5F5', marginTop: 20, height: 45, flexDirection: 'row', alignItems: 'center', borderRadius: 3 }}>
                    <Icon name='search-outline' size={35} color={'gray'} style={{ margin: 8 }} />
                    <TextInput placeholder='Tìm kiếm' placeholderTextColor='#646464' style={{ width: '100%', height: 45, fontSize: 18 }} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginTop: 10 }}>
                    <Text style={{ marginTop: 10, backgroundColor: 'transparent', alignItems: 'center', fontSize: 21, fontWeight: '600' }}>Tài khoản</Text>
                    <TouchableOpacity style={{ marginTop: 14, backgroundColor: 'transparent', alignItems: 'center' }} >
                        <Text style={{ color: '#0055F9', fontSize: 16, fontWeight: '600' }}>Thêm</Text>
                    </TouchableOpacity>
                </View>

                {userData && (
                    <View style={{ height: 100, borderWidth: 1, borderColor: '#e1e1e1', borderRadius: 4, marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Image style={{ width: 52, height: 30, margin: 15, borderRadius: 3 }} source={require('../assets/Group51.png')} />
                    <View style={{ flexDirection: 'column', width: 200 }}>
                        <Text style={{ fontWeight: '500', fontSize: 16, margin: 3 }}>Bluebank Choice</Text>
                        <Text style={{ margin: 3, fontWeight: '650', fontSize: 22 }}>VND {formatMoney(userData.moneyChoice)}</Text>
                        <View style={{ flexDirection: 'row', margin: 3 }}>
                            <Text style={{ color: '#646464' }}>Số dư </Text> <Text style={{ fontWeight: '650', color: '#646464' }}>VND {formatMoney(userData.moneyChoice)} </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{}}>
                        <Icon name='arrow-forward' size={28} color={'blue'} />
                    </TouchableOpacity>
                </View>
                )}
               {userData &&(
                <View style={{ height: 100, borderWidth: 1, borderColor: '#e1e1e1', borderRadius: 4, marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Image style={{ width: 30, height: 30, margin: 26, borderRadius: 3 }} source={require('../assets/bank.png')} />
                    <View style={{ flexDirection: 'column', width: 200 }}>
                        <Text style={{ fontWeight: '500', fontSize: 16, margin: 3 }}>Bluebank Life</Text>
                        <Text style={{ margin: 3, fontWeight: '650', fontSize: 22 }}>VND {formatMoney(userData.moneyLife)}</Text>
                        <View style={{ flexDirection: 'row', margin: 3 }}>
                            <Text style={{ color: '#646464' }}>Số dư </Text> <Text style={{ fontWeight: '650', color: '#646464' }}>VND {formatMoney(userData.moneyLife)}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{}}>
                        <Icon name='arrow-forward' size={28} color={'blue'} />
                    </TouchableOpacity>
                </View>
               )}
                <View style={{ height: 45, borderWidth: 1, borderColor: '#e1e1e1', borderRadius: 4, marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 25 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#646464', fontWeight: '650' }}>Xem tổng số tiền trong tài khoản</Text>
                        <Icon name='chevron-down' size={20} color={'grey'} style={{ right: -30 }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontWeight: '630', fontSize: 19, marginBottom: 4 }}>Hoạt động gần đây</Text>
                <Text style={{ color: '#646464' }}>Trong tháng này</Text>
                <View style={{ height: 245, borderWidth: 1, borderColor: '#e1e1e1', borderRadius: 4, marginTop: 15, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 25 }}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                        <Text style={{ fontWeight: '630', fontSize: 17, margin: 8 }}>Khoản tiêu dùng</Text>
                        <Text style={{ fontWeight: '630', fontSize: 17, margin: 8 }}>Số tiền</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', height: 40, alignItems: 'center', width: '100%', margin: 8 }}>
                        <Image style={{ width: 40, height: 40, margin: 5, marginLeft: 15, marginRight: 10, borderRadius: 3 }} source={require('../assets/Group57.png')} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '83%' }}>
                            <Text style={{ fontSize: 16, fontWeight: '480' }}>Thanh toán Momo</Text>
                            <Text style={{ fontSize: 16, fontWeight: '480' }}>-VND 100.341</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', height: 40, alignItems: 'center', width: '100%', margin: 8 }}>
                        <Image style={{ width: 40, height: 40, margin: 5, marginLeft: 15, marginRight: 10, borderRadius: 3 }} source={require('../assets/Group57.png')} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '83%' }}>
                            <Text style={{ fontSize: 16, fontWeight: '480' }}>Thanh toán Momo</Text>
                            <Text style={{ fontSize: 16, fontWeight: '480' }}>-VND 100.341</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', height: 40, alignItems: 'center', width: '100%', margin: 8 }}>
                        <Image style={{ width: 40, height: 40, margin: 5, marginLeft: 15, marginRight: 10, borderRadius: 3 }} source={require('../assets/Group57.png')} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '83%' }}>
                            <Text style={{ fontSize: 16, fontWeight: '480' }}>Thanh toán Momo</Text>
                            <Text style={{ fontSize: 16, fontWeight: '480' }}>-VND 100.341</Text>
                        </View>
                    </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    toggleModal();
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{fontSize:16,fontWeight:600}}>“Bluebank” Muốn Gửi Thông Báo Cho Bạn</Text>
                        <Text>Các thông báo có thể bao gồm cảnh báo, âm thanh và biểu tượng thông báo. Chúng có thể được cấu hình trong Cài đặt</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Đồng ý" onPress={() => { console.log('Đồng ý'); toggleModal(); }} />
                            <Button title="Không đồng ý" onPress={() => { console.log('Không đồng ý'); toggleModal(); }} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 0,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems:'center',
        justifyContent:'center'
        
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    // Other styles...
});

export default HomeScreen;
