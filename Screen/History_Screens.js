import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert, Modal, Button, TextInput, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";

const listTab = [
    {
        status: 'Đang chờ xác nhận'
    },
    {
        status: 'Đã xác nhận'
    },
    {
        status: 'Đã hủy'
    },
]

const data = [
    { id: '1', status: 'Đang chờ xác nhận', quantity: 2, date: "21/01/2024" },
    { id: '2', status: 'Đã xác nhận', quantity: 2, date: "21/01/2024" },
    { id: '3', status: 'Đang chờ xác nhận', quantity: 2, date: "21/01/2024" },
    { id: '4', status: 'Đã hủy', quantity: 2, date: "21/01/2024" },
    { id: '5', status: 'Đang chờ xác nhận', quantity: 2, date: "21/01/2024" },
    { id: '6', status: 'Đã xác nhận', quantity: 2, date: "21/01/2024" },
    //Thêm dữ liệu khác nếu cần
];

const renderItem = ({ item }) => (
    <View style={styles.iteam}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }} >{item.status}</Text>
        <Text>{item.quantity} mặt hàng</Text>
        <Text>Ngày đặt hàng : {item.date}</Text>
    </View>
);

const KeyExtractor = item => item.id;

const History_Screens = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [status, setstatus] = useState('Đang chờ xác nhận')
    const [datalist, setdatalist] = useState(data)
    const setStatusFilter = status => {
        if (status !== 'Đang chờ xác nhận') {
            setdatalist([...data.filter(e => e.status === status)])
        }
        else {
            setdatalist(data)
        }
        setstatus(status)
    }
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
            {/* tab */}
            <SafeAreaView style={styles.listtab}>
                {
                    listTab.map(e => (

                        <Text
                            onPress={() => setStatusFilter(e.status)}
                            style={[styles.texttab, status === e.status && styles.texttabselection]} >
                            {e.status}
                        </Text>

                    ))
                }


            </SafeAreaView>

            <FlatList
                data={datalist}
                renderItem={renderItem}
                keyExtractor={KeyExtractor}
            />

        </View>
    )
}

export default History_Screens

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

    V2: {
        height: hp('6%'),
        width: wp('90%'),
        borderColor: 'gray',
        borderWidth: 1,
        alignItems: "center",
        marginTop: hp('5%'),
        flexDirection: "row"
    },
    listtab: {
        flexDirection: "row",
        marginBottom: hp('2%')

    },
    texttab: {
        fontSize: 16,
        marginLeft: wp('6%'),
        marginRight: wp('6%'),

        color: "#C0C0C0"
    },
    texttabselection: {
        color: "#9DDC2D"
    },
    iteam: {
        width: wp('90%'),
        height: hp('9%'),
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: "center",
        marginBottom: hp('1.5%'),
        padding: wp('5%'),

    }


})