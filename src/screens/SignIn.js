import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'

const SignIn = (props) => {
    const { navigation } = props;
    const goHome = () => {
        navigation.navigate('Home');
    }
    const goSignUp = () => {
        navigation.navigate('SignUp');
    }
  return (
    <View style={styles.container}>
       <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      ></StatusBar>
      <Image style={styles.logo} source={require('../images/logo.png')}></Image>
      <Text style={styles.welcomeText}>Welcome to Shop-Pi</Text>
      <Text style={styles.createText}>Sign in to continue</Text>
      <View style={styles.inputView}>
        <Image source={require('../images/Message.png')}></Image>
        <TextInput placeholder='Email' />
      </View>
      <View style={styles.inputView}>
        <Image source={require('../images/Password.png')}></Image>
        <TextInput placeholder='Password' />
      </View>
      <TouchableOpacity style={styles.btn} onPress={goHome}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.havView}>
        <Text>Don't have a account?</Text>
        <Text style={styles.signIntext} onPress={goSignUp}>Sign Up</Text>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    paddingStart: 20,
    paddingEnd: 20,
    backgroundColor: '#FFFFFF',
    flex:1
  },
  logo: {
    marginTop: 155,
    alignSelf: 'center'
  },
  welcomeText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
    color: '#223263',
    alignSelf: 'center',
    marginTop: 16
  },
  createText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    color: '#9098B1',
    marginTop: 4,
    alignSelf: 'center'
  },
  inputView: {
    flexDirection: 'row',
    paddingStart: 10,
    paddingEnd: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EBF0FF',
    marginTop: 16
  },
  btn:{
    backgroundColor:'#40BFFF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:6,
    height:57,
    marginTop:20
  },
  btnText:{
    color:'#FFFFFF',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
  },
  havView:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:10
  }, 
  signIntext:{
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '700',
    color:'#40BFFF',
    marginStart:10
  }
})