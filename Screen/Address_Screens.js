import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert, Modal, Button, TextInput, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";


const Address_Screens = () => {
    return (
        <View>
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

                


            </View>
        </View>
    )
}

export default Address_Screens

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    T1: {
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "bold",
        marginLeft: wp('3%')
    }
})