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
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    //Thêm dữ liệu khác nếu cần
];

const renderItem = ({ item }) => (
    <View style={{ padding: 20 }}>
        <Text>{item.title}</Text>
    </View>
);

const KeyExtractor = item => item.id;

const History_Screens = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [status, setstatus] = useState('Đang chờ xác nhận')
    const setStatusFilter = status => {
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

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={KeyExtractor}
                />
            </SafeAreaView>



        </View>
    )
}

export default History_Screens

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: hp('5%'),
        alignItems: "center"
    },
    V1: {
        height: hp('5%'),
        width: wp('100%'),
        marginTop: hp('5%'),
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: 'center'
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
        marginBottom: hp('4%'),
    },
    texttab: {
        fontSize: 16,
        marginLeft: wp('9%'),
        marginRight: wp('9%'),
        marginTop: hp('4%'),
        color: "#C0C0C0"
    },
    texttabselection: {
        color: "#9DDC2D"
    }


})