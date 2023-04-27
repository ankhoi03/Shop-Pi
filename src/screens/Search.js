import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, TextInput, FlatList, ToastAndroid } from 'react-native'
import React,{useState,useEffect} from 'react'
import Item from '../component/Item'
import AxiosIntance from '../config/AxiosIntance'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Search = (props) => {
    const { navigation } = props;
    const goBack = () => {
        navigation.goBack();
    }
    
    const [data, setdata] = useState([]);
    useEffect(() => {
        const getAllproduct = async () => {
          const res = await AxiosIntance().get('product/allproducts');
          if (res) {
            setdata(res.products);
          }
        }
        getAllproduct();
        return () => {
    
        }
      }, [])
    const search = async (searchText) => {
        try {
            const res = await AxiosIntance().get('product/search/name?keyword='+searchText);
            if (res) {
               setdata(res.products);
            }
        } catch {

        }
    }
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
                <TouchableOpacity onPress={goBack}>
                    <Image source={require('../images/back.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.titleText}>Search</Text>
                <TouchableOpacity>
                    <Image source={require('../images/More2.png')}></Image>
                </TouchableOpacity>
            </View >
            <View style={styles.searchView}>
                <Image source={require('../images/search.png')}></Image>
                <TextInput style={styles.searchText} placeholder='Looking for product' onChangeText={text =>{search(text)}}></TextInput>
            </View>
            <Text style={styles.allProductText}>Search Results</Text>

            <View style={styles.listView}>

                <FlatList
                    data={data}
                    numColumns={2}
                    renderItem={({ item }) => <Item data={item} onAdd={() => addCart(item._id)} />}
                    keyExtractor={(item) => item._id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}


export default Search

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