import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, listenOrientationChange as lor, removeOrientationListener as rol } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login_Screens = () => {
  const navigation = useNavigation();
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dangnhap = () => {
    // kiểm tra hợp lệ dữ liệu
    if (Username.length == 0) {
      Alert.alert('', "Chưa nhập Username"); return;
    }
    if (password.length == 0) {
      alert("Chưa nhập Password"); return; // lệnh return để thoát hàm login
    }
    // thực hiện fetch để lấy dữ liệu về
    let url_check_login = "http://192.168.1.9:3000/api/user?username=" + Username;
    
    fetch(url_check_login)
  .then((res) => res.json())
  .then(async (res_login) => {
    if (res_login.status !== 1 || !res_login.data || res_login.data.length === 0) {
      Alert.alert("", "Sai Username");
      return;
    }

    // Tìm người dùng trong mảng dữ liệu
    const user = res_login.data.find(user => user.username === Username && user.passwork === password);
    if (!user) {
      alert("Sai mật khẩu");
      return;
    }

    // Lưu thông tin người dùng vào AsyncStorage
    try {
      await AsyncStorage.setItem('Login_Screens', JSON.stringify(user));
      // Chuyển hướng người dùng đến màn hình tương ứng
      navigation.navigate('Account_Screens');
    } catch (e) {
      // Xử lý lỗi khi lưu thông tin
      console.log(e);
    }
  })
  .catch((error) => {
    // Xử lý lỗi khi gọi API
    console.error(error);
  });

    

  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Welcome to HaPonLa</Text>
      <Text style={styles.text2}>Sign in to continue</Text>
      {/* User */}
      <View style={styles.input}>
        <Image
          source={require('../Image/username.png')}
          style={styles.i1}
          resizeMode="contain"
        />
        <TextInput
          style={styles.textinput}
          placeholder="Your Username"
          onChangeText={(text) => setUsername(text)}
          value={Username}
        />

      </View>
      {/* Pass */}
      <View style={styles.input}>
        <Image
          source={require('../Image/mk.png')}
          style={styles.i1}
          resizeMode="contain"
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)} 
          value={password} 
        />

      </View>

      <TouchableHighlight
        onPress={dangnhap}
        style={styles.button}
      >
        <View >
          <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 18, }} >Sign In</Text>
        </View>
      </TouchableHighlight>

      <Text style={styles.text3}>Forgot Password ?</Text>
      <View style={{ flexDirection: 'row', }}>
        <Text style={styles.text2}>Don’t have a account?</Text>

        <Text onPress={() => { navigation.navigate('Signup_Screens') }} style={styles.text4}> Register</Text>


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
    justifyContent: "center"
  },
})