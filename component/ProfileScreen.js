import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Button, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = ({ navigation }) => {
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
    return (
     
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white' }}>
            
            <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', height: '10%' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='arrow-back' size={30} color={'black'} />
                </TouchableOpacity>
                <Text style={{ fontSize: 22, fontWeight: 640, left: '33%' }}>Hồ sơ</Text>
            </View>
            {userData &&(
            <View style={{ width: '90%', height: '15%', flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../assets/Group69.png')} style={{ width: 70, height: 70, borderRadius: 50 }} />
                <View style={{ marginLeft: '5%' }}>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>{userData.userName}</Text>
                    <Text style={{ color: '#5E5E5E' }}>{userData.soTK}</Text>
                </View>
            </View>
            )}

            <TouchableOpacity style={{ width: '90%', marginTop: '7%', flexDirection: 'row', marginBottom: '3%' }}>
                <Image source={require('../assets/sending.png')} style={{ width: 25, height: 25, marginRight: '6%', left: '2%' }} />
                <Text style={{ fontSize: 18, fontWeight: 550 }}>Hộp thư đến</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '90%', marginTop: '7%', flexDirection: 'row', marginBottom: '5%' }}>
                <Icon name='chatbox-outline' size={25} color={'#0055F9'} style={{ marginRight: '6%', left: '2%' }} />
                <Text style={{ fontSize: 18, fontWeight: 550 }}>Liên hệ chúng tôi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '90%', margin: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 550 }}>Cài đặt</Text>
                <Text>Thông tin cá nhân, bảo mật và thông tin liên lạc</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '90%', margin: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 550 }}>Các tài liệu</Text>
                <Text>Báo cáo, tóm tắt thuế, chứng minh số dư</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '90%', margin: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 550 }}>Thanh toán</Text>
                <Text>Sắp tới, quá khứ, ghi nợ trực tiếp, BPAY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '90%', margin: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 550 }}>Giúp đỡ</Text>
                <Text>Câu hỏi thường gặp, mẹo tài chính, chủ đề, phản hồi</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;
