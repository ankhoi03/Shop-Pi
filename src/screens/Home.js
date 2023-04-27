import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, FlatList, TextInput, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import Item from '../component/Item'
import AxiosIntance from '../config/AxiosIntance'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = (props) => {
  const { navigation } = props;
  const goToCart = () => {
    navigation.navigate('Cart');
  }
  const goToProfile = () => {
    navigation.navigate('Profile');
  }
  const goToSearch = () => {
    navigation.navigate('Search');
  }
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const getAllproduct = async () => {
      const res = await AxiosIntance().get('product/allproducts');

      if (res) {
        setdata(res.products);
        setisLoading(false);
      }
    }
    getAllproduct();
    return () => {

    }
  }, [])

  
  const addCart =async (productId) => {
    const userId = await AsyncStorage.getItem('userId');
    const newCart = {
      userId,
      "productId":productId,
      "quantity": 1
    }
    const res=await AxiosIntance().post('user/addtocart',newCart);
    if(res.result.success==true){
      ToastAndroid.show("Thêm vào giỏ hàng thành công!!", ToastAndroid.SHORT);
    } else{
      ToastAndroid.show("Thêm vào giỏ hàng thất bại!!", ToastAndroid.SHORT);
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
        <TouchableOpacity onPress={goToProfile}>
          <Image source={require('../images/more.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.titleText}>Shop Pi</Text>
        <TouchableOpacity onPress={goToCart}>
          <Image source={require('../images/cart.png')}></Image>
        </TouchableOpacity>
      </View >

      <View style={styles.searchView}>
        <Image source={require('../images/search.png')}></Image>
        <TextInput style={styles.searchText} placeholder='Looking for product' onPressIn={goToSearch}></TextInput>
      </View>
      <Text style={styles.allProductText}>All Products</Text>
      
      <View style={styles.listView}>

        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => <Item data={item}  onAdd={() => addCart(item._id)}/>}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>

  )
}



export default Home

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
    fontSize: 28,
    fontWeight: '700',
    color: '#2B2B2B'
  },
  searchView: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 48,
    paddingStart: 20,
    paddingEnd: 20,
    elevation: 2,
    alignItems: 'center',
    flexDirection: 'row'
  },
  searchText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    color: '#6A6A6A',
    start: 10
  },
  listView: {
    marginTop: 15,
    height: 578,
    backgroundColor: '#F7F7F9',
  },
  allProductText: {
    fontFamily: 'Raleway',
    fontSize: 24,
    fontWeight: '600',
    color: '#2B2B2B',
    marginTop: 10,
    marginStart: 5
  },

})


const dataLord = [
  { "_id": "1" },
  { "_id": "2" },
  { "_id": "3" },
  { "_id": "4" },
  { "_id": "5" },
  { "_id": "6" },
  { "_id": "7" },
  { "_id": "8" },
]