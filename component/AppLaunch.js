import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const AppLaunch = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
            <View style={styles.logo}>
                <Image style={styles.imgLogo} source={require('../assets/logoB.png')}>
                </Image>
            </View>
            <View style={styles.footer}>
                <Text style={styles.txtLogo}>Bluebank</Text>
            </View>
        </View>
    )
}

export default AppLaunch

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0055F9',
        justifyContent:'center'
    },
    header:{
        flex:1,
    },
    logo:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    footer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    imgLogo:{
        width: 75,
        height: 100
    },
    txtLogo:{
        fontSize:20,
        color: 'white',
        fontWeight:'500'
    }
})