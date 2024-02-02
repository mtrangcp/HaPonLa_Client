import { StyleSheet, Text, View, Image, TextInput ,TouchableHighlight  } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, listenOrientationChange as lor, removeOrientationListener as rol } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
const Login_Screens = () => {
  const navigation = useNavigation();
  
  
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    // Xử lý khi người dùng nhấn nút (ví dụ: kiểm tra mật khẩu)
    console.log('Mật khẩu:', password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Welcome to HaPonLa</Text>
      <Text style={styles.text2}>Sign in to continue</Text>
      <View style={styles.input}>
        <Image
          source={require('../Image/username.png')}
          style={styles.i1}
          resizeMode="contain"
        />
        <TextInput style={styles.textinput}
          placeholder="Your Username"

          onChangeText={(inputUsername) => setUsername(inputUsername)}

        />

      </View>

      <View style={styles.input}>
        <Image
          source={require('../Image/mk.png')}
          style={styles.i1}
          resizeMode="contain"
        />
        <TextInput style={styles.textinput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(inputPassword) => setPassword(inputPassword)}
          value={password}
        />

      </View>

      <TouchableHighlight >
        <View style={styles.button}>
          <Text style={{color:"#fff",fontWeight: 'bold',fontSize: 18,}} >Sign In</Text>
        </View>
      </TouchableHighlight>

      <Text  style={styles.text3}>Forgot Password ?</Text>
      <View style={{flexDirection: 'row',}}>
      <Text style={styles.text2}>Don’t have a account?</Text>
      
      <Text onPress={() => { navigation.navigate('Signup_Screens') }}   style={styles.text4}> Register</Text>
      
      
      </View>

    </View>
  )
}

export default Login_Screens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  logo: {
    height: hp('15%'),
    width: wp('25%'),
    marginBottom: hp('2%'),
    marginTop: hp('13%'),
    marginLeft: wp('3%'),
  },
  text: {
    fontSize: 20,
    color: '#9DDC2D',
    marginTop: hp('1%'),
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    color: '#9098B1',
    marginTop: hp('2%'),
    marginBottom: hp('4%'),
  },
  text3: {
    fontSize: 15,
    color: '#9DDC2D',
    marginTop: hp('5%'),
    fontWeight: 'bold',
  },
  text4: {
    fontSize: 15,
    color: '#9DDC2D',
    fontWeight: 'bold',
    marginTop: hp('2%'),
  },


  input: {
    height: hp('6%'),
    width: wp('90%'),
    marginTop: hp('2%'),
    borderWidth: 0.3,
    borderRadius: 4,
    justifyContent: "center",
    flexDirection: 'row',
  },
  i1: {
    height: hp('6%'),
    width: wp('6%'),
    marginLeft: wp('1%'),

  },
  textinput: {
    width: wp('76%'),
    paddingLeft: wp('2%'),
  },

  button: {
    marginTop: hp('3%'),
    borderRadius: 5,
    height: hp('7%'),
    width: wp('90%'),
    alignItems: 'center',
    backgroundColor: '#9DDC2D',
    padding: 10,
    justifyContent:"center"
  },
})