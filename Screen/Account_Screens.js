import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight,TouchableOpacity ,Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, listenOrientationChange as lor, removeOrientationListener as rol } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Account_Screens = () => {
    const navigation = useNavigation();
    const dangxuat = async () =>{
        try {
            // Xóa dữ liệu lưu trữ đăng nhập
            await AsyncStorage.removeItem('Login_Screens');
            // Chuyển màn hình đến màn hình đăng nhập
            navigation.navigate('Login_Screens');
          } catch (error) {
            console.error('Lỗi khi đăng xuất:', error);
          }
        
    }

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

            <View>
                {/* thông tin người dùng */}
                <TouchableOpacity
                    style={styles.B1}
                >
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image
                            source={require('../Image/account.jpg')}
                            style={styles.I1}
                            resizeMode="contain"
                        />

                        <Text style={styles.T2}>Thông tin người dùng</Text>
                    </View>
                    <Image
                        source={require('../Image/next.png')}
                        style={styles.I1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                {/* đơn hàng */}
                <TouchableOpacity
                    style={styles.B1}
                >
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image
                            source={require('../Image/order.jpg')}
                            style={styles.I1}
                            resizeMode="contain"
                        />

                        <Text style={styles.T2}>Đơn hàng</Text>
                    </View>
                    <Image
                        source={require('../Image/next.png')}
                        style={styles.I1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                {/* đổi mật khẩu */}
                <TouchableOpacity
                onPress={() => navigation.navigate('Change_Password')}
                    style={styles.B1}
                >
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image
                            source={require('../Image/pass.jpg')}
                            style={styles.I1}
                            resizeMode="contain"
                        />

                        <Text style={styles.T2}>Đổi mật khẩu</Text>
                    </View>
                    <Image
                        source={require('../Image/next.png')}
                        style={styles.I1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                {/* giảm giá */}
                <TouchableOpacity
                    style={styles.B1}
                >
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image
                            source={require('../Image/discount.jpg')}
                            style={styles.I1}
                            resizeMode="contain"
                        />

                        <Text style={styles.T2}>Giảm giá</Text>
                    </View>
                    <Image
                        source={require('../Image/next.png')}
                        style={styles.I1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                {/* đăng xuất */}
                <TouchableOpacity
                    style={styles.B1}
                    onPress={dangxuat}
                >
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image
                            source={require('../Image/out.jpg')}
                            style={styles.I1}
                            resizeMode="contain"
                        />

                        <Text style={styles.T2}>Đăng xuất</Text>
                    </View>
                    <Image
                        source={require('../Image/next.png')}
                        style={styles.I1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>

            
        </View>


    )
}

export default Account_Screens

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: hp('5%'),
        backgroundColor: "#FFFFFF"
    },
    V1: {
        height: hp('25%'),
        width: wp('100%'),
        backgroundColor: '#9DDC2D',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"

    },
    I1: {
        height: hp('4%'),
        width: wp('8%'),
    },
    B1: {
        flexDirection: "row",
        margin: ('5%'),
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:hp('4%')
    },
    T1: {
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "bold",
        marginLeft: wp('3%')
    },
    T2: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: wp('4%'),
    },

})