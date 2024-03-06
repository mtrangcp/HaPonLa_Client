import { Platform, KeyboardAvoidingView, StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Alert, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


const Signup_Screens = () => {
    const navigation = useNavigation();
    const [Username, setUsername] = useState('');
    const [Fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    // const dangky = () => {

    //     if (Username.length === 0 || Fullname.length === 0 || password.length === 0 || email.length === 0 || phone.length === 0 || address.length === 0) {
    //         Alert.alert('', 'Vui lòng điền đầy đủ thông tin');
    //         return;
    //     }
    //     // tạo đối tượng dữ liệu
    //     let user = {
    //         username: Username,
    //         fullname: Fullname,
    //         passwork: password,
    //         email: email,
    //         phone: phone,
    //         address: address,
    //         points: 0,
    //         role: 'USER',
    //         gender: 'MALE',
    //         active: true,
    //         discounts: [], // Điền giảm giá vào đây
    //         notifications: [],
    //     };
    //     let url_api = 'http://192.168.1.9:3000/api/user/add/';
    //     fetch(url_api, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then((res) => {

    //             if (res.status == 200)
    //                 Alert.alert("Tạo tài khoản thành công")
    //             navigation.navigate('Login_Screens');
    //         })
    //         .catch((ex) => {
    //             console.log(ex);
    //         });
    // }
   
    // const dangky = async () => {
    //     try {
    //         const newUser = {
    //             username: 'example_username',
    //             passwork: 'example_password',
    //             email: 'example@example.com',
    //             phone: '123456789',
    //             fullname: 'Example User',
    //             gender: 'MALE', // hoặc 'FEMALE', 'OTHER'
    //             active: true,
    //             role: 'USER', // hoặc 'ADMIN'
    //             points: 0
    //             // Các trường khác bạn có thể thêm tùy theo cần thiết
    //         };
    
    //         const response = await axios.post('http://192.168.1.9:3000/api/user/add/', newUser);
    
    //         console.log('User created successfully:', response.data);
    //     } catch (error) {
    //         console.error('Error creating user:', error);
    //     }
    // };
    // // Gọi hàm để tạo người dùng mới
    // dangky();
    
    const dangky = async () => {
        try {
            const url = 'http://192.168.1.9:3000/api/user/add/'; // Thay thế YOUR_API_ENDPOINT bằng địa chỉ API của bạn
            const userData = {
                username: 'example_usernameaasssss',
                passwork: 'example_passwordaaasâsss',
                email: 'example@example.com',
                phone: '123456789',
                fullname: 'John Doe',
                gender: 'MALE',
                active: true,
                role: 'USER',
                points: 0 // Thêm các trường khác nếu cần
            };
    
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Các headers khác nếu cần
                },
                body: JSON.stringify(userData),
            });
    
            if (!response.ok) {
                throw new Error('Error creating user');
            }
    
            const responseData = await response.json();
            console.log('User created successfully:', responseData);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    
    // Gọi hàm createUser để tạo user
    dangky();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="always">
                <Image
                    source={require('../Image/logo.jpg')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.text}>Let’s Get Started</Text>
                <Text style={styles.text2}>Create a new account</Text>
                {/* ... Your other components ... */}
                <View style={styles.input}>
                    <Image
                        source={require('../Image/username.png')}
                        style={styles.i1}
                        resizeMode="contain"
                    />
                    <TextInput
                        style={styles.textinput}
                        placeholder="Username"
                        onChangeText={(text) => setUsername(text)}
                        value={Username}
                    />
                </View>
                <View style={styles.input}>
                    <Image
                        source={require('../Image/username.png')}
                        style={styles.i1}
                        resizeMode="contain"
                    />
                    <TextInput style={styles.textinput}
                        placeholder="Full name"
                        onChangeText={(text) => setFullname(text)}
                        value={Fullname}

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
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>

                <View style={styles.input}>
                    <Image
                        source={require('../Image/email2.png')}
                        style={styles.i1}
                        resizeMode="contain"
                    />
                    <TextInput style={styles.textinput}
                        placeholder="Your Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}

                    />

                </View>

                <View style={styles.input}>
                    <Image
                        source={require('../Image/phone.png')}
                        style={styles.i1}
                        resizeMode="contain"
                    />
                    <TextInput style={styles.textinput}
                        placeholder="Phone"
                        onChangeText={(text) => setPhone(text)}
                        value={phone}

                    />

                </View>

                <View style={styles.input}>
                    <Image
                        source={require('../Image/address.png')}
                        style={styles.i1}
                        resizeMode="contain"
                    />
                    <TextInput style={styles.textinput}
                        placeholder="Address"

                        onChangeText={(text) => setAddress(text)}
                        value={address}

                    />

                </View>

                <TouchableHighlight
                    onPress={dangky}
                    style={styles.button}

                >
                    <View >
                        <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 18 }} >Sign Up</Text>
                    </View>
                </TouchableHighlight>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text2}>Already have an account?</Text>
                    <Text onPress={() => { navigation.navigate('Login_Screens') }} style={styles.text4}> Sign In</Text>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: hp('5%'), // Optional: Add paddingBottom to ensure the content is not covered by the navigation bar.
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
});

export default Signup_Screens;
