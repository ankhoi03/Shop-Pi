import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import React from 'react'
import Item from '../component/Item'

const Home = (props) => {
  const { navigation } = props;
  const goToCart = () => {
      navigation.navigate('Cart');
  }
  const goToProfile = () => {
    navigation.navigate('Profile');
}
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
        <Text style={styles.titleText}>Explore</Text>
        <TouchableOpacity onPress={goToCart}>
          <Image source={require('../images/cart.png')}></Image>
        </TouchableOpacity>
      </View >

      <View style={styles.searchView}>
        <Image source={require('../images/search.png')}></Image>
        <TextInput style={styles.searchText} placeholder='Looking for product'></TextInput>
      </View>
      <Text style={styles.allProductText}>All Products</Text>
      <View style={styles.listView}>

        <FlatList
          data={dataLord}
          numColumns={2}
          renderItem={({ item }) => <Item />}
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
    fontSize: 32,
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
    marginTop:10,
    marginStart:5
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