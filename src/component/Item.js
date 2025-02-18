import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Item = (props) => {
    const navigation = useNavigation();
    const { data,onAdd } = props;
    const gotoDetail = () => {
        navigation.navigate('ProductDetail',{id:data?._id});
    };
    return (
        <TouchableOpacity style={styles.container} onPress={gotoDetail}>
            <Image style={styles.img} source={{ uri: data?.image }}></Image>
            <Text numberOfLines={1} style={styles.text}>{data?.name}</Text>
            <Image source={require('../images/Group391.png')}></Image>
            <Text style={styles.cost}>${data?.price}</Text>
            <View style={styles.bottomView}>
                <Text style={styles.oldCost}>$1599,99</Text>
                <Text style={styles.sale}>24% off</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Item


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.42,
        aspectRatio:1/1.6,
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
        width: Dimensions.get('window').width * 0.35,
        aspectRatio:1,
        resizeMode:'cover'
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
        bottom: 0,
        right: 0,
        position:'absolute'
    }
})