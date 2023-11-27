import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';

export default function Onboarding_Step2({ navigation }) {
  const [aChecked, setAChecked] = useState(false);
  const [bChecked, setBChecked] = useState(false);
  const [cChecked, setCChecked] = useState(false);
  const [dChecked, setDChecked] = useState(false);
  const [eChecked, setEChecked] = useState(false);

  const handleACheckbox = () => {
    setAChecked(!aChecked);
    setBChecked(false);
    setCChecked(false);
    setDChecked(false);
    setEChecked(false);
  };
  const handleBCheckbox = () => {
    setBChecked(!bChecked);
    setAChecked(false);
    setCChecked(false);
    setDChecked(false);
    setEChecked(false);
  };
  const handleCCheckbox = () => {
    setCChecked(!cChecked);
    setBChecked(false);
    setAChecked(false);
    setDChecked(false);
    setEChecked(false);
  };
  const handleDCheckbox = () => {
    setDChecked(!dChecked);
    setBChecked(false);
    setCChecked(false);
    setAChecked(false);
    setEChecked(false);
  };
  const handleECheckbox = () => {
    setEChecked(!eChecked);
    setBChecked(false);
    setCChecked(false);
    setDChecked(false);
    setAChecked(false);
  };

  const handleContinue = () => {
    navigation.navigate('Onboarding_Step3');
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
          <View style={styles.rectangle} />
          <View style={styles.rectangle} />
          <View style={styles.rectangle} />
        </View>
      </View>
      <View style={styles.container2}>
        <View>
          <Text style={styles.txtTitle}>
            Bạn bao nhiêu tuổi?
          </Text>
          <Text style={styles.txtContent}>
            Nếu bạn mở tài khoản cho trẻ em, vui lòng chọn độ tuổi của họ
          </Text>
        </View>
        <View>
          <Text style={styles.txtselect}>
            Chọn độ tuổi
          </Text>
          <View style={styles.optionContainer}>
            <Text style={styles.label}>Dưới 14</Text>
            <TouchableOpacity
              style={[
                styles.checkbox,
                aChecked && styles.checkedCheckbox,
              ]}
              onPress={handleACheckbox}
            >
              {aChecked ? (
                <Text style={styles.checkedText}>✓</Text>
              ) : null}
            </TouchableOpacity>
          </View>

          <View style={styles.optionContainer}>
            <Text style={styles.label}>14 - 17</Text>
            <TouchableOpacity
              style={[
                styles.checkbox,
                bChecked && styles.checkedCheckbox,
              ]}
              onPress={handleBCheckbox}
            >
              {bChecked ? (
                <Text style={styles.checkedText}>✓</Text>
              ) : null}
            </TouchableOpacity>
          </View>

          <View style={styles.optionContainer}>
            <Text style={styles.label}>18 - 29</Text>
            <TouchableOpacity
              style={[
                styles.checkbox,
                cChecked && styles.checkedCheckbox,
              ]}
              onPress={handleCCheckbox}
            >
              {cChecked ? (
                <Text style={styles.checkedText}>✓</Text>
              ) : null}
            </TouchableOpacity>
          </View>

          <View style={styles.optionContainer}>
            <Text style={styles.label}>30 - 54</Text>
            <TouchableOpacity
              style={[
                styles.checkbox,
                dChecked && styles.checkedCheckbox,
              ]}
              onPress={handleDCheckbox}
            >
              {dChecked ? (
                <Text style={styles.checkedText}>✓</Text>
              ) : null}
            </TouchableOpacity>
          </View>

          <View style={styles.optionContainer}>
            <Text style={styles.label}>55 tuổi trở lên</Text>
            <TouchableOpacity
              style={[
                styles.checkbox,
                eChecked && styles.checkedCheckbox,
              ]}
              onPress={handleECheckbox}
            >
              {eChecked ? (
                <Text style={styles.checkedText}>✓</Text>
              ) : null}
            </TouchableOpacity>
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
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    padding: 12,
    height: 48,
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  checkedCheckbox: {
    backgroundColor: 'blue',
    borderColor: 'white',
  },
  checkedText: {
    fontSize: 20,
    color: 'white',
  },
  label: {
    fontSize: 14,
    marginRight: 10,
    fontWeight: '700',
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
});
