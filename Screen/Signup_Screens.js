import { Platform, KeyboardAvoidingView, StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Alert, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


const Signup_Screens = () => {
    const navigation = useNavigation();
    const [Username, setUsername] = useState('');
    const [Fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    //giới tính
    const [selectedGender, setSelectedGender] = useState(null);
    const handleGenderSelection = (gender) => {
        setSelectedGender(gender);
    };

    //ẩn hiện mật hẩu
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };


    const dangky = () => {

        if (Username.length === 0 || Fullname.length === 0 || password.length === 0 || email.length === 0 || phone.length === 0) {
            Alert.alert('', 'Vui lòng điền đầy đủ thông tin');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('', 'Email không hợp lệ');
            return;
        }

        const phoneRegex = /^\d{10,11}$/;
        if (!phoneRegex.test(phone)) {
            Alert.alert('', 'Số điện thoại không hợp lệ');
            return;
        }
        // tạo đối tượng dữ liệu
        let user = {
            username: Username,
            fullname: Fullname,
            passwork: password,
            email: email,
            phone: phone,
            points: 0,
            role: 'USER',
            gender: selectedGender,
            active: true,

        };
        let url_api = 'http://192.168.1.9:3000/api/user/add/';
        fetch(url_api, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then((res) => {

                if (res.status == 200)
                    Alert.alert("Tạo tài khoản thành công")
                navigation.navigate('Login_Screens');
            })
            .catch((ex) => {
                console.log(ex);
            });
    }



    // const dangky = async () => {
    //     try {
    //         console.log(Fullname)
    //         const response = await fetch('http://192.168.1.9:3000/api/User/add/', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 username: Username,
    //                 passwork: password,
    //                 email: email,
    //                 phone: password,
    //                 fullname: Fullname,
    //                 gender: 'MALE',
    //                 active: true,
    //                 role: 'USER',
    //                 points: 0 // Thêm các trường khác nếu cần

    //             }),
    //         });
    //         console.log(response)
    //         if (!response.ok) {
    //             throw new Error('Error creating user');
    //         }
    //         const responseData = await response.json();
    //         // console.log('User created successfully:', responseData);
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     }
    // };

    // // Gọi hàm createUser để tạo user
    // dangky();

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

                {/* usernam */}
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
                    <View style={styles.eyepass}></View>
                </View>
                {/* full name */}
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
                    <View style={styles.eyepass}></View>
                </View>
                {/* pass */}
                <View style={styles.input}>
                    <Image
                        source={require('../Image/mk.png')}
                        style={styles.i1}
                        resizeMode="contain"
                    />
                    <TextInput style={styles.textinput}
                        placeholder="Password"
                        secureTextEntry={secureTextEntry}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    <TouchableOpacity onPress={toggleSecureEntry} activeOpacity={1}>
                        <Image
                            source={secureTextEntry ? require('../Image/passan.png') : require('../Image/passhien.png')}
                            style={styles.eyepass}
                            resizeMode="contain"
                        />

                    </TouchableOpacity>
                </View>
                {/* email */}
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
                    <View style={styles.eyepass}></View>
                </View>
                {/* phone */}
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
                    <View style={styles.eyepass}></View>

                </View>
                {/* địa chỉ */}
                {/* <View style={styles.input}>
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
                    <View style={styles.eyepass}></View>

                </View> */}


                <View style={styles.igender}>
                    <View style={styles.vgender1} >
                        <Image
                            source={require('../Image/gender.png')}
                            style={styles.i1}
                            resizeMode="contain"
                        />
                        <Text style={{ marginLeft: wp('1%') }} >Giới tính :</Text>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-around',}}>
                        <TouchableOpacity
                            style={[styles.buttongender, selectedGender === 'MALE' && styles.selectedButton]}
                            onPress={() => handleGenderSelection('MALE')}
                        >
                            <Text style={styles.buttonText}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttongender, selectedGender === 'FEMALE' && styles.selectedButton]}
                            onPress={() => handleGenderSelection('FEMALE')}
                        >
                            <Text style={styles.buttonText}>Female</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttongender, selectedGender === 'OTHER' && styles.selectedButton]}
                            onPress={() => handleGenderSelection('OTHER')}
                        >
                            <Text style={styles.buttonText}>Other</Text>
                        </TouchableOpacity>
                        <View></View>
                    </View>
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
        width: wp('95%'),
        marginTop: hp('2%'),
        borderWidth: 0.3,
        borderRadius: 4,
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: 'center'
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
        width: wp('94%'),
        alignItems: 'center',
        backgroundColor: '#9DDC2D',
        padding: 10,
        justifyContent: "center"
    },
    eyepass: {
        height: hp('4%'),
        width: wp('4%'),
        marginLeft: wp('2%')

    },
    igender: {
        marginTop:hp('1%'),
        height: hp('12%'),
        width: wp('95%'),
       
    },
    vgender1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: wp('2.5%')

    },
    buttongender: {
        backgroundColor: '#f0f0f0',
        height: hp('5%'),
        width: wp('20%'),
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        justifyContent:'center',
        alignItems:'center',
    },
    selectedButton: {
        backgroundColor: '#9DDC2D',
      },
});

export default Signup_Screens;
