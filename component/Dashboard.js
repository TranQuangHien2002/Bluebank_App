import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
export default function Dashboard({navigation}) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Dashboard</Text>
<Button title="Đi tới GetStarted" onPress={() => navigation.navigate('GetStarted')} />
<Button title="Quay lại màn hình trước đó" onPress={() => navigation.goBack()} />
<Button title="Quay lại màn hình đầu tiên" onPress={() => navigation.popToTop()}/>
</View>
)
}
const styles = StyleSheet.create({})
