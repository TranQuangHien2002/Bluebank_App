import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image, ScrollView } from 'react-native';

export default function Onboarding_Step5({ navigation }) {


  const handleContinue = () => {
    navigation.navigate('AccountSuccess');
  };

  const handleGoBack = () => {
    navigation.goBack();//Quay lại màn hình trước đó
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.arrowIcon}
          onPress={handleGoBack} // Sử dụng onPress để quay lại
        >
          <Image
            source={require('../assets/muiTen.png')}
            style={styles.arrowImage}
          />
        </TouchableOpacity>
        <View style={styles.containerRectangle}>
          <View style={[styles.rectangle, styles.greenRectangle]} />
          <View style={[styles.rectangle, styles.greenRectangle]} />
          <View style={[styles.rectangle, styles.greenRectangle]} />
          <View style={[styles.rectangle, styles.greenRectangle]} />
          <View style={[styles.rectangle, styles.greenRectangle]} />
        </View>
      </View>
      <View style={styles.container2}>
        <View>
          <Text style={styles.txtTitle}>
            Tài khoản được đề xuất
          </Text>
          <Text style={styles.txtContent}>
            Điều này dựa trên thông tin bạn cung cấp
          </Text>
        </View>
        <ScrollView>
        <View style={styles.container2A}>
          <View style={styles.containerTitle2A}>
            <Text style={styles.txtContainerTitle2A}>Tài khoản kết hợp</Text>
          </View>
          <Text style={[styles.txtLable]}>Bluebank Life</Text>
          <Text style={{color:'#5E5E5E',marginVertical:10}} >Bluebank Life có thể giúp bạn đạt được mục tiêu tiết kiệm sớm hơn bằng cách kiếm lãi suất thưởng hàng tháng khi bạn tiết kiệm</Text>
          <Text style={[styles.txtLable,{marginVertical:10,backgroundColor:'#E6EEFE',padding:20},]}>
            • Kiếm lãi suất biến đổi lên đến 4,50% <br></br>
            • Không phí duy trì tài khoản <br></br>
            • 18+ Độ tuổi tối thiểu để mở tài khoản
          </Text>
          <Text style={styles.txtLable}>
            Những gì bạn nhận được
          </Text>
          <Text style={{marginVertical:10,color:'#5E5E5E'}}>
            • Chia tiết kiệm của bạn thành tối đa 6 mục tiêu tiết kiệm khác nhau <br></br>
            • Tăng tiết kiệm của bạn với lãi suất thưởng mỗi tháng khi bạn tăng số dư của bạn <br></br>
            • Truy cập không giới hạn thông qua tài khoản Bluebank Choice 
          </Text>
          <Text style={{marginVertical:15}}>
            <hr></hr>
          </Text>
          <Text style={styles.txtLable}>Bluebank Choice</Text>
          <Text>Một tài khoản hàng ngày kèm thẻ ghi nợ</Text>
          <Text style={[styles.txtLable,{marginVertical:10,backgroundColor:'#E6EEFE',padding:20},]}>
            • Phí duy trì tài khoản là 50.000, trừ khi bạn dưới 30 tuổi <br></br>
            • Nếu bạn dưới 14 tuổi, bạn có thể mở tài khoản tại chi nhánh ngân hàng cùng với một trong hai bố hoặc người giám hộ
          </Text>
          <Text style={styles.txtLable}>Bạn sẽ nhận được gì</Text>
          <Text style={{marginVertical:10,color:'#5E5E5E'}}>
            • "Dễ dàng truy cập vào tiền của bạn với một thẻ Debit Mastercard và loạt ví điện tử (bao gồm Apple Pay & Google Pay)<br></br>
            • Truy cập vào các ưu đãi và giảm giá độc quyền <br></br>
            • Bảo đảm hoàn tiền trong trường hợp gian lận
          </Text>
          <View style={styles.container3}>
            <TouchableOpacity style={[styles.startButton,{backgroundColor:'#001848'}]} onPress={handleContinue}>
              <Text style={styles.startButtonText}>Tìm hiểu thêm</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity style={styles.startButton} onPress={handleContinue}>
          <Text style={styles.startButtonText}>Mở tài khoản</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container2: {
    flex: 4,
    marginTop: 30
  },
  container3: {
    flex: 1,
  },

  arrowImage: {
    width: 24,
    height: 24,
  },
  arrowIcon: {
    flex: 1
  },
  containerRectangle: {
    marginLeft: 20,
    flex: 33,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  rectangle: {
    width: 40,
    height: 4,
    backgroundColor: '#D9D9D9',
  },
  greenRectangle: {
    backgroundColor: '#0055F9'
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
  txtTitle: {
    fontSize: 18,
    fontWeight: '700'
  },
  txtContent: {
    fontSize: 14,
    marginTop: 10
  },
  txtselect: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 30
  }
  ,
  container2A: {
    marginTop: 10,
    width: '100%',
    height: 'auto',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 5,
    padding:10
  },
  containerTitle2A: {
    marginTop: 10,
    backgroundColor: "#E6EEFE",
    width: 143,
    height: 36,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 'auto'
  },
  txtContainerTitle2A: {
    color: '#0055F9',
    fontSize: 14,
    fontWeight: '600'
  },
  txtLable:{
    fontSize:14,
    fontWeight:'500',
    marginTop:10
  }
});
