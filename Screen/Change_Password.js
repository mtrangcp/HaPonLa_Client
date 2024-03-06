import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, listenOrientationChange as lor, removeOrientationListener as rol } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Change_Password = () => {
    return (
        <View style={styles.container}>
            <View style={styles.V1}>
                <Image
                    source={{ uri: 'https://timnhadat.s3-ap-southeast-1.amazonaws.com/images/raovat/2022/08/16/133051071460737398-26.jpg' }}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 100
                    }}
                />
                <Text style={styles.T1} >Thùy Linh</Text>
            </View>

            <View style={styles.container2}>
            <View style={styles.input}>
                <Image
                    source={require('../Image/mk.png')}
                    style={styles.i1}
                    resizeMode="contain"
                />
                <TextInput
                    style={styles.textinput}
                    placeholder="Mật khẩu cũ"
                    // onChangeText={(text) => setUsername(text)}
                    // value={Username}
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
                    placeholder="Mật khẩu mới"
                    secureTextEntry={true}
                    // onChangeText={(text) => setPassword(text)}
                    // value={password}
                />

            </View>

            <TouchableHighlight
                
                style={styles.button}
            >
                <View >
                    <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 18, }} >Đổi mật khẩu</Text>
                </View>
            </TouchableHighlight>

            </View>

            




        </View>


    )

}

export default Change_Password

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: hp('5%'),
        backgroundColor: "#FFFFFF"
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    V1: {
        height: hp('25%'),
        width: wp('100%'),
        backgroundColor: '#9DDC2D',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"

    },
    T1: {
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "bold",
        marginLeft: wp('3%')
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