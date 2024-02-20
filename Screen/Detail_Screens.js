import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert, Modal, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Detail_Screens = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={styles.container}>
            {/* Search */}
            <View style={styles.V1}>
                <TouchableOpacity style={{ marginRight: 20 }}>
                    <Image
                        source={require('../Image/back.png')}
                        style={[styles.i1, { tintColor: '#9DDC2D' }]}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <View style={styles.search}>
                    <Image
                        source={require('../Image/search.jpg')}
                        style={styles.i2}
                        resizeMode="contain"
                    />

                    <TextInput
                        placeholder="Search Product"
                        onChangeText={Text}
                        value={searchQuery}
                    />

                </View>

                <TouchableOpacity style={{ marginRight: 20 }}>
                    <Image
                        source={require('../Image/notification.jpg')}
                        style={styles.i1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginRight: 20 }}>
                    <Image
                        source={require('../Image/message.jpg')}
                        style={styles.i1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default Detail_Screens

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: hp('5%'), // Optional: Add paddingBottom to ensure the content is not covered by the navigation bar.

    },
    V1: {
        height: hp('6%'),
        width: wp('100%'),
        marginTop: hp('5%'),
        justifyContent: "center",
        flexDirection: 'row',
        
        alignItems:'center'
    },
    i1: {
        height: hp('5%'),
        width: wp('6%'),
        marginLeft: wp('1%'),
        
        

    },
    i2: {
        height: hp('3%'),
        width: wp('3%'),
        margin: wp('2%'),

    },
    search: {
        height: hp('4%'),
        width: wp('65%'),
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: wp('3%'),
        



    },
})