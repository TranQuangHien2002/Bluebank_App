import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'


const GetStarted = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imgLogomini} source={require('../assets/logomini.png')}>
                </Image>
                <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: '#0055F9', fontSize: 18, fontWeight: '600' }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logo}>
                <Image style={styles.imgLogo} source={require('../assets/people.png')}>
                </Image>
            </View>
            <View style={styles.body}>
                <Text style={styles.txtBig}>BlueBank - Đối tác tài chính tin cậy của bạn!</Text>
                <Text style={styles.txtSmall}>Khám phá tài khoản hoàn hảo với BlueBank và trải nghiệm dịch vụ ngân hàng trực tuyến tốt nhất</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText}>Bắt đầu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20

    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgLogo: {
        width: 321,
        height: 321
    },
    txtLogo: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500'
    },
    imgLogomini: {
        width: 138,
        height: 35
    },
    btnLogin: {
        marginTop: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    txtBig: {
        marginLeft: 10,
        fontSize: 32,
        fontWeight: '600'
    },
    txtSmall: {
        marginTop:10,
        marginLeft: 10,
        fontSize: 14,
    },
    startButton: {
        width:'100%',
        height:60,
        backgroundColor: '#0055F9', 
        padding: 18, 
        borderRadius: 50, 
    },
    startButtonText: {
        color: 'white', 
        fontSize: 18, 
        textAlign: 'center', 
    },
})