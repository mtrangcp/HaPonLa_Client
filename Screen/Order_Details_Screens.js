import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert, Modal, Button, TextInput, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
    { id: '1', name: 'Tô điểm sắc màu', quantity: 2, price: "321.000 đ", image: 'https://product.hstatic.net/200000294254/product/bia_to_diem_sac_mau_54ad95aeb042488ba6566d44a4fff453.jpg' },
    { id: '2', name: 'Tô điểm sắc màu', quantity: 2, price: "321.000 đ", image: 'https://product.hstatic.net/200000294254/product/bia_to_diem_sac_mau_54ad95aeb042488ba6566d44a4fff453.jpg' },
    { id: '3', name: 'Tô điểm sắc màu', quantity: 2, price: "321.000 đ", image: 'https://product.hstatic.net/200000294254/product/bia_to_diem_sac_mau_54ad95aeb042488ba6566d44a4fff453.jpg' },
    { id: '4', name: 'Tô điểm sắc màu', quantity: 2, price: "321.000 đ", image: 'https://product.hstatic.net/200000294254/product/bia_to_diem_sac_mau_54ad95aeb042488ba6566d44a4fff453.jpg' },
    { id: '5', name: 'Tô điểm sắc màu', quantity: 2, price: "321.000 đ", image: 'https://product.hstatic.net/200000294254/product/bia_to_diem_sac_mau_54ad95aeb042488ba6566d44a4fff453.jpg' },
    { id: '6', name: 'Tô điểm sắc màu', quantity: 2, price: "321.000 đ", image: 'https://product.hstatic.net/200000294254/product/bia_to_diem_sac_mau_54ad95aeb042488ba6566d44a4fff453.jpg' },
    //Thêm dữ liệu khác nếu cần
];

const renderItem = ({ item }) => (
    <View style={styles.iteam}>
        <Image source={{ uri: item.image }} style={styles.i3} resizeMode="contain" />
        <View style={{ marginLeft: wp('4%'), }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold',}} >{item.name}</Text>
            <Text style={{ marginTop: hp('1%') }}>{item.price}</Text>
            <Text style={{ marginTop: hp('1%') }}>Số lượng : {item.quantity}</Text>
        </View>

    </View>
);

const KeyExtractor = item => item.id;

const Order_Details_Screens = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [datalist, setdatalist] = useState(data)
    return (
        <View style={styles.container}>
            {/* search */}
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

                <TouchableOpacity style={{ marginRight: wp('4%') }}>
                    <Image
                        source={require('../Image/notification.jpg')}
                        style={styles.i1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginRight: wp('1%') }}>
                    <Image
                        source={require('../Image/message.jpg')}
                        style={styles.i1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>


            </View>

            <View style={styles.V2}>
                <FlatList
                    style={styles.V2}
                    data={datalist}
                    renderItem={renderItem}
                    keyExtractor={KeyExtractor}
                />
            </View>

        </View>
    )
}

export default Order_Details_Screens

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: hp('5%'),
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    V1: {
        height: hp('5%'),
        width: wp('100%'),
        marginTop: hp('5%'),
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: 'center',

    },
    i1: {
        height: hp('5%'),
        width: wp('6%'),

    },
    i2: {
        height: hp('3%'),
        width: wp('3%'),
        margin: wp('2%'),
    },
    search: {
        height: hp('4%'),
        width: wp('63%'),
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: wp('3%'),

    },
    i3: {
        height: hp('10%'),
        width: wp('20%'),
    },

    iteam: {
        width: wp('90%'),
        height: hp('11%'),
        alignItems:"center",
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: hp('1.5%'),
        flexDirection: 'row',
        justifyContent:"flex-start",
        
    },
    V2:
    {
        width: wp('90%'),
        height: hp('26%'),
        marginTop:hp('2%'),
    }

})