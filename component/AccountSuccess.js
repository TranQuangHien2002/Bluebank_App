import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const accountScreen = ({ navigation }) => {

  const handleContinue = () => {
    navigation.navigate('Login')
  };
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.arrowIcon} >
          <Image source={require('../assets/Group 49a.png')} style={styles.arrowImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity style={styles.startButton} onPress={handleContinue}>
          <Text style={styles.startButtonText}>Hoàn tất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  container1: {
    alignItems: 'center',
    justifyContent:'center',
    flex: 5
  },
  arrowImage:{
    width:'250px',
    height:'250px'
  },
  container3: {
    flex: 1,
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

});

export default accountScreen;
