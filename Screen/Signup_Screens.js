import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Signup_Screens = () => {
    const navigation = useNavigation();
    const [Username, setUsername] = useState('');
    const [Fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.container}>
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
                    onChangeText={(inputUsername) => setUsername(inputUsername)}
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
                    onChangeText={(inputFullname) => setFullname(inputFullname)}

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

            <View style={styles.input}>
                <Image
                    source={require('../Image/email2.png')}
                    style={styles.i1}
                    resizeMode="contain"
                />
                <TextInput style={styles.textinput}
                    placeholder="Your Email"

                    onChangeText={(inputemail) => setEmail(inputemail)}

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

                    onChangeText={(inputphone) => setPhone(inputphone)}

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

                    onChangeText={(inputaddress) => setAddress(inputaddress)}

                />

            </View>

            <TouchableHighlight>
                <View style={styles.button}>
                    <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 18 }} >Sign In</Text>
                </View>
            </TouchableHighlight>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text2}>Already have an account?</Text>
                <Text onPress={() => { navigation.navigate('Login_Screens') }} style={styles.text4}> Sign In</Text>
            </View>
        
        </ScrollView>
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
