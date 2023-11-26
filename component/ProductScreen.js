import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', height: '10%', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: 640 }}>Sản phẩm</Text>
        <TouchableOpacity>
          <Icon name='search-outline' size={30} color={'blue'} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ width: '90%', margin: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 550 }}>Tài khoản ngân hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '90%', margin: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 550 }}>Khoản vay mua nhà</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '90%', margin: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 550 }}>Thẻ tín dụng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '90%', margin: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 550 }}>Khoản vay cá nhân</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '90%', margin: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 550 }}>Quốc tế và du lịch</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '90%', margin: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 550 }}>Bảo hiểm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '90%', margin: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 550 }}>Cổ phiếu & đầu tư</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '90%', margin: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 550 }}>Sản phẩm kinh doanh</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ProductScreen;
