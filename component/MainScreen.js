
import * as React from 'react';
import { Text, View,Image,TouchableOpacity, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const formatNumber = (numberString) => {
  const firstPart = numberString.slice(0, 4);
  const secondPart = numberString.slice(4, 8);
  const thirtPart = numberString.slice(8, 12);
  const endPart =numberString.slice(12);
  return firstPart + ' ' + secondPart + ' ' + thirtPart + endPart;
}
const hideNumbers = (numberString) => {
  const length = numberString.length;
  const hiddenPart = '**** **** ****';
  const visiblePart = numberString.slice(length - 4, length);
  return hiddenPart + visiblePart;
}
const hideNumbersCVC = () => {
  const hiddenPart = '****';
  return hiddenPart;
}
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start',padding: 20, backgroundColor:'white',flexDirection:'column',}}>
      <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems:'flex-start', width:'100%'}}>
                <Image style={{width: 138,height: 35, left:10}} source={require('../assets/logomini.png')}/>
                <TouchableOpacity style={{marginTop: 10,backgroundColor: 'transparent',alignItems: 'center'}} >
                    <Text style={{ color: '#0055F9', fontSize: 18, fontWeight: '600' }}>Đăng Xuất</Text>
                </TouchableOpacity>
            </View>

      <View style={{backgroundColor:'#F5F5F5', marginTop:20, height:45, flexDirection:'row', alignItems:'center', borderRadius:3}}>
        <Icon name='search-outline' size={35} color={'gray'} style={{margin:8}}/>
        <TextInput placeholder='Tìm kiếm' placeholderTextColor='#646464' style={{width:'100%',height:45, fontSize: 18}}/>
      </View>

      <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems:'flex-start', width:'100%', marginTop: 10}}>
                <Text style={{marginTop: 10,backgroundColor: 'transparent',alignItems: 'center',fontSize: 21, fontWeight: '600'}}>Tài khoản</Text>
                <TouchableOpacity style={{marginTop: 14,backgroundColor: 'transparent',alignItems: 'center'}} >
                    <Text style={{ color: '#0055F9', fontSize: 16, fontWeight: '600' }}>Thêm</Text>
                </TouchableOpacity>
                </View>

      <View style={{height:100, borderWidth:1,borderColor:'#e1e1e1', borderRadius: 4, marginTop:15, flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>
        <Image style={{width: 52,height: 30, margin: 15, borderRadius:3}} source={require('../assets/Group51.png')}/>
        <View style={{flexDirection:'column', width: 200}}>
          <Text style={{fontWeight: '500',fontSize: 16,margin: 3}}>Bluebank Choice</Text>
          <Text style={{margin: 3,fontWeight: '650',fontSize: 22}}>VND 21.521.000</Text>
          <View style={{flexDirection:'row', margin:3}}>
          <Text style={{color:'#646464'}}>Số dư </Text> <Text style={{fontWeight: '650',color:'#646464'}}>VND </Text> <Text style={{color:'#646464'}}>21.521.000</Text></View>
        </View>
        <TouchableOpacity style={{}}>
          <Icon name='arrow-forward' size={28} color={'blue'}/>
          </TouchableOpacity>
      </View>
      <View style={{height:100, borderWidth:1,borderColor:'#e1e1e1', borderRadius: 4, marginTop:15, flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
        <Image style={{width: 30,height: 30, margin: 26, borderRadius:3}} source={require('../assets/bank.png')}/>
        <View style={{flexDirection:'column', width: 200}}>
          <Text style={{fontWeight: '500',fontSize: 16,margin: 3}}>Bluebank Life</Text>
          <Text style={{margin: 3,fontWeight: '650',fontSize: 22}}>VND 102.771.200</Text>
          <View style={{flexDirection:'row', margin:3}}>
          <Text style={{color:'#646464'}}>Số dư </Text> <Text style={{fontWeight: '650',color:'#646464'}}>VND </Text> <Text style={{color:'#646464',fontWeight: '650'}}>102.771.200</Text></View>
        </View>
        <TouchableOpacity style={{ }}>
          <Icon name='arrow-forward' size={28} color={'blue'}/>
          </TouchableOpacity>
      </View>
      <View style={{height:45, borderWidth:1,borderColor:'#e1e1e1', borderRadius: 4, marginTop:15, flexDirection:'row',alignItems:'center',justifyContent:'center', marginBottom:25}}>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'#646464',fontWeight: '650'}}>Xem tổng số tiền trong tài khoản</Text>
          <Icon name='chevron-down' size={20} color={'grey'} style={{right:-30}}/></TouchableOpacity>
      </View>
      <Text style={{fontWeight:'630', fontSize:19, marginBottom:4}}>Hoạt động gần đây</Text>
      <Text style={{color:'#646464'}}>Trong tháng này</Text>
      <View style={{height:245, borderWidth:1,borderColor:'#e1e1e1', borderRadius: 4, marginTop:15, flexDirection:'column',alignItems:'center',justifyContent:'flex-start', marginBottom:25}}>
        <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
        <Text style={{fontWeight:'630', fontSize:17, margin:8 }}>Khoản tiêu dùng</Text>
        <Text style={{fontWeight:'630', fontSize:17, margin:8}}>Số tiền</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'flex-start', height:40, alignItems:'center', width:'100%',margin: 8}}>
        <Image style={{width: 40,height: 40, margin: 5,marginLeft:15,marginRight:10, borderRadius:3}} source={require('../assets/Group57.png')}/>
        <View style={{flexDirection:'row', justifyContent:'space-around', width:'83%'}}>
        <Text style={{fontSize:16,fontWeight:'480',}}>Thanh toán Momo</Text>
        <Text style={{fontSize:16,fontWeight:'480'}}>-VND 100.341</Text>
        </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'flex-start', height:40, alignItems:'center', width:'100%',margin: 8}}>
        <Image style={{width: 40,height: 40, margin: 5,marginLeft:15,marginRight:10, borderRadius:3}} source={require('../assets/Group57.png')}/>
        <View style={{flexDirection:'row', justifyContent:'space-around', width:'83%'}}>
        <Text style={{fontSize:16,fontWeight:'480',}}>Thanh toán Momo</Text>
        <Text style={{fontSize:16,fontWeight:'480'}}>-VND 100.341</Text>
        </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'flex-start', height:40, alignItems:'center', width:'100%',margin: 8}}>
        <Image style={{width: 40,height: 40, margin: 5,marginLeft:15,marginRight:10, borderRadius:3}} source={require('../assets/Group57.png')}/>
        <View style={{flexDirection:'row', justifyContent:'space-around', width:'83%'}}>
        <Text style={{fontSize:16,fontWeight:'480',}}>Thanh toán Momo</Text>
        <Text style={{fontSize:16,fontWeight:'480'}}>-VND 100.341</Text>
        </View>
        </View>
      </View>
    </View>
  );
}

function Card() {
  const originalNumber = '0123456789101234';
  const CVCNumber = '1234'
  const [showNumber, setShowNumber] = useState(false);
  
  const toggleNumberVisibility = () => {
    setShowNumber(!showNumber);
    
  };
  
  const formattedNumber = formatNumber(originalNumber);
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'white' }}>
      <View style={{flexDirection:'row', width:'90%', alignItems:'center', height:'10%'}}>
        <Icon name='arrow-back' size={30} color={'black'}/>
        <Text style={{fontSize:22, fontWeight:640, left:'35%'}}>Cards</Text>
      </View>
      <Image source={require('../assets/Group50.png')} style={{width:290, height:160, marginTop: 20}}></Image>
      <View style={{width:170, margin:15}}>
        <Text style={{fontSize:22, textAlign:'center', fontWeight:600}}>Bluebank Debit<br></br> Mastercard</Text>
      </View>
      <View style={{width: '90%', flexDirection:'row', justifyContent:'space-between'}}>
        
        <View>
        <Text>Chi tiết số thẻ</Text>
        {showNumber ? (
        <Text style={{fontSize:20, fontWeight: 500}}>{formattedNumber}</Text>
        ) : (
        <Text style={{fontSize:20, fontWeight: 500}}>{hideNumbers(formattedNumber)}</Text>
      )}
    </View>
      <TouchableOpacity style={{padding:20}}>
        <Text style={{ color: '#0055F9', fontSize: 16, fontWeight: '600' }} title={showNumber ? "Hide" : "Show"} onPress={toggleNumberVisibility} >Show All</Text>
      </TouchableOpacity>
      </View>
      <View style={{width:'90%'}}>
        <Text>Dynamic CVC</Text>
        {showNumber ? (
        <Text style={{fontSize:20, fontWeight: 500}}>{CVCNumber}</Text>
        ) : (
        <Text style={{fontSize:20, fontWeight: 500}}>{hideNumbersCVC(CVCNumber)}</Text>
      )}
    </View>
    <View style={{height:1, backgroundColor:'#DFDFDF', width:'100%',marginTop:8}}></View>
    <View style={{width:'90%', margin: 15}}>
      <Text style={{marginTop: 10,backgroundColor: 'transparent',alignItems: 'center',fontSize: 22, fontWeight: '600'}}>Bảo mật</Text>
    </View>
    <TouchableOpacity style={{width:'90%', margin:15}}>
      <Text style={{fontSize:18, fontWeight:550}}>Khóa thẻ tạm thời</Text>
      <Text>Mở khóa</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:15}}>
      <Text style={{fontSize:18, fontWeight:550}}>Báo cáo thẻ bị mất hay đánh cắp</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:15}}>
      <Text style={{fontSize:18, fontWeight:550}}>Đặt hoặc thay đổi mã PIN</Text>
    </TouchableOpacity>
    </View>
  );
}
function exchange() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'white' }}>
      <View style={{flexDirection:'row', width:'90%', alignItems:'center', height:'10%'}}>
      <TouchableOpacity>
        <Icon name='arrow-back' size={30} color={'black'}/></TouchableOpacity>
        <Text style={{fontSize:22, fontWeight:640, left:'35%'}}>Sản phẩm</Text>
      </View>
    </View>
  );
}
function Product() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'white' }}>
      <View style={{flexDirection:'row', width:'90%', alignItems:'center', height:'10%', justifyContent:'space-between'}}>
      <TouchableOpacity>
        <Icon name='arrow-back' size={30} color={'black'}/></TouchableOpacity>
        <Text style={{fontSize:22, fontWeight:640}}>Sản phẩm</Text>
        <TouchableOpacity>
        <Icon name='search-outline' size={30} color={'blue'}/></TouchableOpacity>
      </View>
      <TouchableOpacity style={{width:'90%', margin:15}}>
      <Text style={{fontSize:18, fontWeight:550}}>Tài khoản ngân hàng</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:15}}>
      <Text style={{fontSize:18, fontWeight:550}}>Khoản vay mua nhà</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:15}}>
      <Text style={{fontSize:18, fontWeight:550}}>Thẻ tín dụng</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:15}}>
      <Text style={{fontSize:18, fontWeight:550}}>Khoản vay cá nhân</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:15}}>
      <Text style={{fontSize:18, fontWeight:550}}>Quốc tế và du lịch</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:15}}>
      <Text style={{fontSize:18, fontWeight:550}}>Bảo hiểm</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:15}}>
      <Text style={{fontSize:18, fontWeight:550}}>Cổ phiếu & đầu tư</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:15}}>
      <Text style={{fontSize:18, fontWeight:550}}>Sản phẩm kinh doanh</Text>
    </TouchableOpacity>
    </View>
  );
}
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'white' }}>
      <View style={{flexDirection:'row', width:'90%', alignItems:'center', height:'10%'}}>
      <TouchableOpacity>
        <Icon name='arrow-back' size={30} color={'black'}/></TouchableOpacity>
        <Text style={{fontSize:22, fontWeight:640, left:'33%'}}>Hồ sơ</Text>
      </View>
      <View style={{width:'90%', height:'15%',flexDirection:'row', alignItems:'center'}}>
      <Image source={require('../assets/Group69.png')} style={{width:70, height:70, borderRadius:50}}/>
      <View style={{marginLeft:'5%'}}>
        <Text style={{fontSize:18, fontWeight:600}}>Tran Quang Hien</Text>
        <Text style={{color:'#5E5E5E'}}>Customer ID: 12304567</Text>
      </View>
      </View>
      <TouchableOpacity style={{width:'90%', marginTop:'7%', flexDirection:'row',marginBottom:'3%'}}>
      <Image source={require('../assets/sending.png')} style={{width:25,height:25, marginRight:'6%', left:'2%'}}/>
      <Text style={{fontSize:18, fontWeight:550}}>Hộp thư đến</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', marginTop:'7%', flexDirection:'row', marginBottom:'5%'}}>
      <Icon name='chatbox-outline' size={25} color={'#0055F9'} style={{marginRight:'6%', left:'2%'}}/>
      <Text style={{fontSize:18, fontWeight:550}}>Liên hệ chúng tôi</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:20}}>
      <Text style={{fontSize:18, fontWeight:550}}>Cài đặt</Text>
      <Text>Thông tin cá nhân, bảo mật và thông tin liên lạc</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:20}}>
      <Text style={{fontSize:18, fontWeight:550}}>Các tài liệu</Text>
      <Text>Báo cáo, tóm tắt thuế, chứng minh số dư</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:20}}>
      <Text style={{fontSize:18, fontWeight:550}}>Thanh toán</Text>
      <Text>Sắp tới, quá khứ, ghi nợ trực tiếp, BPAY</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{width:'90%', margin:20}}>
      <Text style={{fontSize:18, fontWeight:550}}>Giúp đỡ</Text>
      <Text>Câu hỏi thường gặp, mẹo tài chính, chủ đề, phản hồi</Text>
    </TouchableOpacity>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MainScreen () {
  return (
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: { 
            height: '135%',
            top:-17.5, 
            backgroundColor: 'white',
            borderTopWidth:1,
            borderTopColor:'#E8E8E8'
          },
          
          labelStyle: {
            fontSize: 12,
            top:-12 // Kích thước chữ cho tiêu đề tab
          }
        }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Trang chủ') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Thẻ') {
              iconName = focused ? 'card' : 'card-outline';
            } else if (route.name === 'Sản phẩm') {
              iconName = focused ? 'briefcase' : 'briefcase-outline';
            }else if (route.name === 'Hồ sơ') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Trang chủ" component={HomeScreen} />
        <Tab.Screen name="Thẻ" component={Card}/>
        <Tab.Screen name="Giao Dịch" component={exchange} options={{
          tabBarIcon: () => (
            <Image resizeMode="contain" style={{width:50, height:50, top: -17}}source={require('../assets/Frame2.png')}/>
          ),
        }}
      />
        <Tab.Screen name="Sản phẩm" component={Product} />
        <Tab.Screen name="Hồ sơ" component={Profile} />
      </Tab.Navigator>
  );
}
