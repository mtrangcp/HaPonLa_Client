import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert, Modal, Button, TextInput, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";


const User_Information_Screens = () => {
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
        {/* giới tính */}
        <TouchableOpacity
            style={styles.B1}
        >
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image
                    source={require('../Image/sex.jpg')}
                    style={styles.I1}
                    resizeMode="contain"
                />

                <Text style={styles.T2}>Giới tính</Text>
            </View>
            <Image
                source={require('../Image/next.png')}
                style={styles.I1}
                resizeMode="contain"
            />
        </TouchableOpacity>
        {/* email */}
        <TouchableOpacity
            style={styles.B1}
        >
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image
                    source={require('../Image/email.png')}
                    style={styles.I1}
                    resizeMode="contain"
                />

                <Text style={styles.T2}>Email</Text>
            </View>
            <Image
                source={require('../Image/next.png')}
                style={styles.I1}
                resizeMode="contain"
            />
        </TouchableOpacity>
        {/* số điện thoại */}
        <TouchableOpacity
            style={styles.B1}
        >
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image
                    source={require('../Image/phone2.jpg')}
                    style={styles.I1}
                    resizeMode="contain"
                />

                <Text style={styles.T2}>Số điện thoại</Text>
            </View>
            <Image
                source={require('../Image/next.png')}
                style={styles.I1}
                resizeMode="contain"
            />
        </TouchableOpacity>
        {/* địa chỉ */}
        <TouchableOpacity
            style={styles.B1}
        >
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image
                    source={require('../Image/address.jpg')}
                    style={styles.I1}
                    resizeMode="contain"
                />

                <Text style={styles.T2}>Địa chỉ</Text>
            </View>
            <Image
                source={require('../Image/next.png')}
                style={styles.I1}
                resizeMode="contain"
            />
        </TouchableOpacity>
        {/* setting */}
        <TouchableOpacity
            style={styles.B1}
        >
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Image
                    source={require('../Image/setting.jpg')}
                    style={styles.I1}
                    resizeMode="contain"
                />

                <Text style={styles.T2}>Cài đặt</Text>
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

export default User_Information_Screens

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