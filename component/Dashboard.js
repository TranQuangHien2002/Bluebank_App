import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
export default function Dashboard({navigation}) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Dashboard</Text>
<Button title="Đi tới Login" onPress={() => navigation.navigate('Login')} />
<Button title="Quay lại màn hình trước đó" onPress={() => navigation.goBack()} />
<Button title="Quay lại màn hình đầu tiên" onPress={() => navigation.popToTop()}/>
</View>
)
}
const styles = StyleSheet.create({})
