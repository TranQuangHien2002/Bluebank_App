// MainScreen.js
import * as React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../component/HomeScreen';
import CardScreen from '../component/CardScreen';
import ExchangeScreen from '../component/ExchangeScreen';
import ProductScreen from '../component/ProductScreen';
import ProfileScreen from '../component/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          height: '135%',
          top: -17.5,
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#E8E8E8',
        },
        labelStyle: {
          fontSize: 12,
          top: -12,
        },
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Thẻ') {
            iconName = focused ? 'card' : 'card-outline';
          } else if (route.name === 'Giao Dịch') {
            return (
              <Image
                resizeMode="contain"
                style={{ width: 50, height: 50, top: -17 }}
                source={require('../assets/Frame2.png')}
              />
            );
          } else if (route.name === 'Sản phẩm') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Hồ sơ') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Thẻ" component={CardScreen} />
      <Tab.Screen name="Giao Dịch" component={ExchangeScreen} />
      <Tab.Screen name="Sản phẩm" component={ProductScreen} />
      <Tab.Screen name="Hồ sơ" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;