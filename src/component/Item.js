import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Item = () => {
    const navigation = useNavigation();

    const gotoDetail = () => {
        navigation.navigate('ProductDetail');
    };
    return (
        <TouchableOpacity style={styles.container} onPress={gotoDetail}>
            <Image style={styles.img} source={require('../images/sony.jpg')}></Image>
            <Text style={styles.text}>Sony Xperia 1 IV</Text>
            <Image source={require('../images/Group391.png')}></Image>
            <Text style={styles.cost}>$1299,99</Text>
            <View style={styles.bottomView}>
                <Text style={styles.oldCost}>$1599,99</Text>
                <Text style={styles.sale}>24% off</Text>
                <TouchableOpacity>
                    <Image style={styles.imgAdd} source={require('../images/add.png')}></Image>
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        width: 165,
        height: 280,
        backgroundColor: '#FFFFFF',
        elevation: 3,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        padding: 16,
        marginStart: 9,
        marginBottom: 10,
        borderRadius: 15
    },
    img: {
        alignSelf: 'center',
        width: 150,
        height: 150
    },
    text: {
        color: '#223263',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 6,
        marginTop: 10
    },
    cost: {
        color: '#40BFFF',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '700',
        marginTop: 6
    },
    oldCost: {
        textDecorationLine: 'line-through',
        marginEnd: 4
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6
    },
    sale: {
        color: '#FB7181',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '700',
        marginEnd: 2
    },
    imgAdd: {
        bottom: 1,
        right: 0
    }
})