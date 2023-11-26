import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ExchangeScreen = ({ navigation }) => {
  
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'white' }}>
          <View style={{flexDirection:'row', width:'90%', alignItems:'center', height:'10%'}}>
          <TouchableOpacity>
            <Icon name='arrow-back' size={30} color={'black'}/></TouchableOpacity>
            <Text style={{fontSize:22, fontWeight:640, left:'35%'}}>Sản phẩm</Text>
          </View>
        </View>
      );
};

export default ExchangeScreen;
