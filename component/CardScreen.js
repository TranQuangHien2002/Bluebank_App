import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CardScreen = ({ navigation }) => {
    const originalNumber = '0123456789101234';
    const CVCNumber = '1234';
    const [showNumber, setShowNumber] = useState(false);

    const toggleNumberVisibility = () => {
        setShowNumber(!showNumber);
    };

    const formatNumber = (numberString) => {
        const firstPart = numberString.slice(0, 4);
        const secondPart = numberString.slice(4, 8);
        const thirdPart = numberString.slice(8, 12);
        const endPart = numberString.slice(12);
        return firstPart + ' ' + secondPart + ' ' + thirdPart + endPart;
    };

    const hideNumbers = (numberString) => {
        const length = numberString.length;
        const hiddenPart = '**** **** ****';
        const visiblePart = numberString.slice(length - 4, length);
        return hiddenPart + visiblePart;
    };

    const hideNumbersCVC = () => {
        const hiddenPart = '****';
        return hiddenPart;
    };

    const formattedNumber = formatNumber(originalNumber);

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', height: '10%' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name='arrow-back' size={30} color={'black'} />
                </TouchableOpacity>
                <Text style={{ fontSize: 22, fontWeight: 640, left: '35%' }}>Cards</Text>
            </View>
            <Image source={require('../assets/Group50.png')} style={{ width: 290, height: 160, marginTop: 20 }}></Image>
            <View style={{ width: 170, margin: 15 }}>
                <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: 600 }}>Bluebank Debit<br></br> Mastercard</Text>
            </View>
            <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text>Chi tiết số thẻ</Text>
                    {showNumber ? (
                        <Text style={{ fontSize: 20, fontWeight: 500 }}>{formattedNumber}</Text>
                    ) : (
                        <Text style={{ fontSize: 20, fontWeight: 500 }}>{hideNumbers(formattedNumber)}</Text>
                    )}
                </View>
                <TouchableOpacity style={{ padding: 20 }}>
                    <Text
                        style={{ color: '#0055F9', fontSize: 16, fontWeight: '600' }}
                        title={showNumber ? 'Hide' : 'Show'}
                        onPress={toggleNumberVisibility}
                    >
                        Show All
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '90%' }}>
                <Text>Dynamic CVC</Text>
                {showNumber ? (
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>{CVCNumber}</Text>
                ) : (
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>{hideNumbersCVC(CVCNumber)}</Text>
                )}
            </View>
            <View style={{ height: 1, backgroundColor: '#DFDFDF', width: '100%', marginTop: 8 }}></View>
            <View style={{ width: '90%', margin: 15 }}>
                <Text style={{ marginTop: 10, backgroundColor: 'transparent', alignItems: 'center', fontSize: 22, fontWeight: '600' }}>Bảo mật</Text>
            </View>
            <TouchableOpacity style={{ width: '90%', margin: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: 550 }}>Khóa thẻ tạm thời</Text>
                <Text>Mở khóa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '90%', margin: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: 550 }}>Báo cáo thẻ bị mất hay đánh cắp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '90%', margin: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: 550 }}>Đặt hoặc thay đổi mã PIN</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CardScreen;
