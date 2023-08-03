import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,StatusBar, ToastAndroid } from 'react-native'
import React,{useState} from 'react'
import config from '../config/Config'
import AxiosIntance from '../config/AxiosIntance'

const SignUp = (props) => {
  const { navigation } = props;
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const [confirm_password, setconfirm_password] = useState('');
  const [hiddenPassword, sethiddenPassword] = useState(true);
  const goSignIn = async() => {
   
    let data = { email, password,name,confirm_password }
    const res = await AxiosIntance().post('user/register', data);
    if(res.result==true){
      ToastAndroid.show("Đăng ký thành công!!", ToastAndroid.SHORT);
      setTimeout(function(){
        navigation.navigate('SignIn');
      },2000);
    } else {
      ToastAndroid.show("Đăng ký thất bại!!", ToastAndroid.SHORT);
    }

  
  }
  return (
    <View style={styles.container}>
       <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      ></StatusBar>
      <Image style={styles.logo} source={require('../images/logo.png')}></Image>
      <Text style={styles.welcomeText}>Let’s Get Started</Text>
      <Text style={styles.createText}>Create an new account</Text>
      <View style={styles.inputView}>
        <Image source={require('../images/User.png')}></Image>
        <TextInput placeholder='Full Name' onChangeText={setname}/>
      </View>
      <View style={styles.inputView}>
        <Image source={require('../images/Message.png')}></Image>
        <TextInput placeholder='Email' onChangeText={setemail}/>
      </View>
      <View style={styles.inputView}>
      {
          hiddenPassword ?
            <TouchableOpacity onPress={() => sethiddenPassword(false)}>
              <Image source={require('../images/Password.png')}></Image>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => sethiddenPassword(true)}>
              <Image source={require('../images/Password2.png')}></Image>
            </TouchableOpacity>
        }
        <TextInput secureTextEntry={hiddenPassword} placeholder='Password' onChangeText={setpassword}/>
      </View>
      <View style={styles.inputView}>
      {
          hiddenPassword ?
            <TouchableOpacity onPress={() => sethiddenPassword(false)}>
              <Image source={require('../images/Password.png')}></Image>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => sethiddenPassword(true)}>
              <Image source={require('../images/Password2.png')}></Image>
            </TouchableOpacity>
        }
        <TextInput secureTextEntry={hiddenPassword} placeholder='Password Again' onChangeText={setconfirm_password}/>
      </View>
      <TouchableOpacity style={styles.btn} onPress={goSignIn}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.havView}>
        <Text>have a account?</Text>
        <Text style={styles.signIntext} onPress={()=>navigation.navigate('SignIn')}>Sign In</Text>
      </View>
    </View>
  )
}

export default SignUp

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



