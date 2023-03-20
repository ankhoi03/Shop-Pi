import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import CartItem from '../component/CartItem'

const Cart = (props) => {
    const { navigation } = props;
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                translucent={true}
                backgroundColor={'transparent'}
            ></StatusBar>

            <View style={styles.headerView}>
                <TouchableOpacity onPress={goBack}>
                    <Image source={require('../images/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.titleText}>Your cart</Text>
                <TouchableOpacity>
                    <Image source={require('../images/More2.png')}></Image>
                </TouchableOpacity>
            </View >

            <View style={styles.listView}>
                <FlatList
                    data={dataLord}
                    renderItem={({ item }) => <CartItem />}
                    keyExtractor={(item) => item._id}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View style={styles.priceView}>
                <View style={styles.rowCenterView}>
                    <Text style={styles.normalText}>Items (4)</Text>
                    <Text style={styles.normalPrice}>$5199,96</Text>
                </View>
                <View style={styles.rowCenterView}>
                    <Text style={styles.normalText}>Shipping</Text>
                    <Text style={styles.normalPrice}>$1,99</Text>
                </View>
                <Image source={require('../images/Line.png')}></Image>
                <View style={styles.rowCenterView}>
                    <Text style={styles.totalPriceText}>Total Price</Text>
                    <Text style={styles.totalPrice}>$5198,98</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.btn} >
                <Text style={styles.btnText}>Check Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        paddingStart: 20,
        paddingEnd: 20,
        flex: 1,
        backgroundColor: '#F7F7F9',
    },
    headerView: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText: {
        fontFamily: 'Raleway',
        fontSize: 22,
        fontWeight: '700',
        color: '#2B2B2B'
    },
    listView: {
        marginTop: 20,
        height: 435,
        backgroundColor: '#F7F7F9',
    },
    priceView: {
        marginTop: 20,
        height: 120,
        backgroundColor: '#FFFFFF',
        paddingStart: 16,
        paddingTop: 10,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        borderRadius: 5,
        elevation: 1,
    },
    rowCenterView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 315,
        height: 32
    },
    normalText: {
        color: '#9098B1',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
    },
    normalPrice: {
        color: '#223263',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '500',
    },
    totalPriceText: {
        color: '#223263',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '700',
    },
    totalPrice: {
        color: '#40BFFF',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '700',
    },
    btn: {
        backgroundColor: '#40BFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        height: 57,
        marginTop: 20
    },
    btnText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '700',
    },

})

const dataLord = [
    { "_id": "1" },
    { "_id": "2" },
    { "_id": "3" },
    { "_id": "4" },
]