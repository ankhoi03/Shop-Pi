import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, FlatList, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import CartItem from '../component/CartItem'
import AxiosIntance from '../config/AxiosIntance'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Cart = (props) => {
    const { navigation } = props;
    const goBack = () => {
        navigation.goBack();
    }
    const [data, setdata] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);
    const handletotalPrice=(cart)=>{
        let total = 0;
        cart.forEach((cartItem) => {
          total += cartItem.quantity * cartItem.productId.price;
        });
        settotalPrice(total);
    }
    useEffect(() => {
        const getCart = async () => {
            const userId = await AsyncStorage.getItem('userId');
            const res = await AxiosIntance().get('user/getcart/'+userId);

            if (res) {
                setdata(res.cart);
                handletotalPrice(res.cart)
            }
        }
        getCart();

        return () => {

        }
    }, [])

    const handleDelete = async (id) => {
        const res = await AxiosIntance().get('user/cart/delete/' + id);
        if (res.status == true) {
            ToastAndroid.show("Xóa khỏi giỏ hàng thành công!!", ToastAndroid.SHORT);
            const newData = data.filter((dataL) => dataL._id !== id);
            setdata(newData);
            handletotalPrice(newData);
        } else {
            ToastAndroid.show("Thêm vào giỏ hàng thất bại!!", ToastAndroid.SHORT);
        }

    };
    const handleIncrement = async (id) => {
        const res = await AxiosIntance().post('user/incrementcart', { id });
        if (res.result == true) {
            const newData = data.map((dataL) => {
                if (dataL._id == id) {
                    return { ...dataL, quantity: dataL.quantity + 1 };
                }
                return dataL;
            });
            setdata(newData);
            handletotalPrice(newData);
        }
    };

    const handleDecrement =async (id) => {
        const res = await AxiosIntance().post('user/decrementcart', { id });
        if (res.result == true) {
            const newData = data.map((dataL) => {
                if (dataL._id == id && dataL.quantity > 1) {
                    return { ...dataL, quantity: dataL.quantity - 1 };
                }
                return dataL;
            });
            setdata(newData);
            handletotalPrice(newData);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                translucent={true}
                backgroundColor={'transparent'}
            ></StatusBar>

            <View style={styles.headerView}>
                <TouchableOpacity onPress={goBack} style={styles.headerButton}>
                    <Image source={require('../images/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.titleText}>Your cart</Text>
                <TouchableOpacity style={styles.headerButton}>
                    <Image source={require('../images/More2.png')}></Image>
                </TouchableOpacity>
            </View >

            <View style={styles.listView}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <CartItem data={item} onDelete={() => handleDelete(item._id)} onIncrement={() => handleIncrement(item._id)} onDecrement={() => handleDecrement(item._id)} />}
                    keyExtractor={(item) => item._id}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View style={styles.priceView}>
                <View style={styles.rowCenterView}>
                    <Text style={styles.normalText}>Items</Text>
                    <Text style={styles.normalPrice}>${totalPrice.toFixed(2)}</Text>
                </View>
                <View style={styles.rowCenterView}>
                    <Text style={styles.normalText}>Shipping</Text>
                    <Text style={styles.normalPrice}>$5</Text>
                </View>
                <Image source={require('../images/Line.png')}></Image>
                <View style={styles.rowCenterView}>
                    <Text style={styles.totalPriceText}>Total Price</Text>
                    <Text style={styles.totalPrice}>${(totalPrice+5).toFixed(2)}</Text>
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
    headerButton:{
        width:26,
        height:26,
        justifyContent:'center',
        alignItems:'center'
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