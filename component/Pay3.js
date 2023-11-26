import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const TransferScreen = () => {
  const apiUrl = 'https://65637199ee04015769a735e3.mockapi.io/BlueBank';
  const [userData, setUserData] = useState(null);
  const [transferAmount, setTransferAmount] = useState('');

  useEffect(() => {
    fetchData(apiUrl);
  }, []);

  const fetchData = async (apiUrl) => {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data[0];
      setUserData(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleTransfer = async () => {
    try {
      // Make the transfer request
      const response = await axios.put(`${apiUrl}/${userData.id}`, {
        moneyChoice: userData.moneyChoice - parseInt(transferAmount),
        moneyLife: userData.moneyLife + parseInt(transferAmount),
      });

      // Log the response (for debugging purposes)
      console.log('Transfer response:', response.data);

      // If you want to update the local state with the new data from the server, you can do that here
      // setUserData(response.data);
      navigation.navigate('Pay4')

    } catch (error) {
      console.error('Error updating data:', error);

      // Log the detailed error response from the server (for debugging purposes)
      if (error.response) {
        console.log('Server error response:', error.response.data);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Từ Bluebank Choice</Text>
      {userData && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Bluebank Choice</Text>
          <Text style={styles.balance}>VND {userData.moneyChoice.toLocaleString('en-US')}</Text>
        </View>
      )}

      <Text style={styles.title}>Đến Bluebank Life</Text>
      {userData && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Bluebank Life</Text>
          <Text style={styles.balance}>VND {userData.moneyLife.toLocaleString('en-US')}</Text>
        </View>
      )}

      <Text style={styles.title}>Số tiền</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập số tiền..."
          keyboardType="numeric"
          value={transferAmount}
          onChangeText={(text) => setTransferAmount(text)}
        />
        <Text style={styles.vndText}>VND</Text>
      </View>

      <Text style={{ fontSize: 14, fontWeight: 500, marginTop: 20 }}>Ghi chú(Tùy chọn)</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.transferButton} onPress={handleTransfer}>
        <Text style={styles.transferButtonText}>Chuyển tiền</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 4,
    padding: 15,
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    flex: 1,
  },
  transferButton: {
    backgroundColor: '#0055F9',
    padding: 15,
    borderRadius: 4,
    marginTop: 20,
  },
  transferButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    flex: 1,
  },
  vndText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TransferScreen;
