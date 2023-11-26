// components/InputScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Picker, Image,TouchableOpacity} from 'react-native';

// Định nghĩa đối tượng quốc gia với tên và đường dẫn ảnh quốc kỳ
const countries = [
  { name: 'Vietnam', flag: require('../assets/vietnam.png') },
  { name: 'United States', flag: require('../assets/united-states.png') },
  // Thêm các quốc gia khác nếu cần
];

const InputScreen = ({ navigation }) => {
  const [ho, setHo] = useState('');
  const [tenDem, setTenDem] = useState('');
  const [ten, setTen] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('United States'); // Giả sử mặc định là Việt Nam

  const handleSave = () => {
    // Xử lý lưu dữ liệu đầu vào, ví dụ: gửi đến API
    console.log('Họ:', ho);
    console.log('Tên đệm:', tenDem);
    console.log('Tên:', ten);
    console.log('Số điện thoại:', phoneNumber);
    console.log('Email:', email);
    console.log('Quốc gia:', selectedCountry);
  };

  const handleContinue = () => {
    navigation.navigate('AccountSuccess');
  };

  const handleGoBack = () => {
    navigation.goBack();//Quay lại màn hình trước đó
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.arrowIcon}
        onPress={handleGoBack} // Sử dụng onPress để quay lại
      >
        <Image
          source={require('../assets/muiTen.png')}
          style={styles.arrowImage}
        />
      </TouchableOpacity>
      <View style={{marginTop:50, marginBottom: 30}}>
          <Text style={styles.txtTitle}>
            Thông tin của bạn
          </Text>
          <Text style={styles.txtContent}>
            Hãy bắt đầu bằng thông tin của bạn
          </Text>
        </View>

      <View style={styles.inputContainer}>
        <Text style={{fontWeight:700}} >Họ</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setHo(text)}
          value={ho}
        />
        <Text style={[styles.txtContent, {marginTop:-10,marginBottom:20,fontSize:12}]}>
        Để giúp chúng tôi xác minh danh tính của bạn trực tuyến, vui lòng nhập tên của bạn đúng như nó xuất hiện trên căn cước công dân của bạn.
          </Text>

        <Text style={{fontWeight:700}}>Tên đệm (nếu có)</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTenDem(text)}
          value={tenDem}
        />

        <Text style={{fontWeight:700}}>Tên</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTen(text)}
          value={ten}
        />

        <Text style={{fontWeight:700}}>Số điện thoại</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhoneNumber(text)}
          placeholder="Nhập số điện thoại của bạn"
          value={phoneNumber}
          keyboardType="numeric"
        />

        <Text style={{fontWeight:700}}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          placeholder="Nhập địa chỉ email của bạn"
          value={email}
          keyboardType="email-address"
        />

        <Text style={{fontWeight:700}}>Quốc gia</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCountry}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedCountry(itemValue)}
          >
            {countries.map((country, index) => (
              <Picker.Item key={index} label={country.name} value={country.name} />
            ))}
          </Picker>
          {/* Hiển thị ảnh quốc kỳ được chọn */}
          <View style={styles.selectedCountryContainer}>
            <Image source={countries.find((country) => country.name === selectedCountry)?.flag} style={{ width: '100%', height: '100%' }} />
          </View>
        </View>
      </View>

      <View style={styles.container3}>
        <TouchableOpacity style={styles.startButton} onPress={handleContinue}>
          <Text style={styles.startButtonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  arrowImage: {
    width: 24,
    height: 24,
  },
  arrowIcon: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16, // Thêm khoảng cách giữa các input
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    width: 200,
    height: 40,
    marginRight: 20, // Thêm khoảng cách giữa Picker và ảnh quốc kỳ
  },
  selectedCountryContainer: {
    width: 20,
    height: 20,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: '700'
  },
  txtContent: {
    fontSize: 14,
    marginTop: 10
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
  }
});

export default InputScreen;
