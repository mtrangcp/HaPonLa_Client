import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert, Modal, Button, TextInput, TouchableHighlight } from "react-native";
import React, { useState, useEffect } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";

const listTab = [
    {
        status: 'Đã hủy'
    },
    {
        status: 'Đang chờ xác nhận'
    },
    {
        status: 'Đã xác nhận'
    },
    {
        status: 'Đang vận chuyển'
    },
    {
        status: 'Giao hàng thành công'
    },
]

const data = [
    { id: '1', status: 'Đang chờ xác nhận', quantity: 2, name: 'ONE PIECE - TẬP 66', date: "21/01/2024", image: 'https://lh3.googleusercontent.com/WaqKoYeaQ8qEP_b2zPfIVfgV7pGNuFI2z016nTeX71GevH7qMZtlkxkIlXupxsLH-B_FZrLvTo5KfHY3tl737UY8cewxXe79-giqvXsAT5wMUPBUvw=w570-e365' },
    { id: '2', status: 'Đã xác nhận', quantity: 2, name: 'ONE PIECE - TẬP 66', date: "21/01/2024", image: 'https://product.hstatic.net/200000343865/product/35_9dbee6331a3e4a458e5864084e90005d_master.jpg' },
    { id: '3', status: 'Đang vận chuyển', quantity: 2, name: 'ONE PIECE - TẬP 66', date: "21/01/2024", image: 'https://product.hstatic.net/200000343865/product/1_cd3e91d598a942589a0c7cc6fde58b0b_master.jpg' },
    { id: '4', status: 'Đã hủy', quantity: 2, name: 'ONE PIECE - TẬP 66', date: "21/01/2024", image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/386/441/products/2-197.jpg?v=1594705933387' },
    { id: '5', status: 'Giao hàng thành công', name: 'ONE PIECE - TẬP 66', quantity: 2, date: "21/01/2024", image: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/386/441/products/2-197.jpg?v=1594705933387' },
    { id: '6', status: 'Đã xác nhận', quantity: 2, name: 'ONE PIECE - TẬP 66', date: "21/01/2024", image: 'https://product.hstatic.net/200000343865/product/1_cd3e91d598a942589a0c7cc6fde58b0b_master.jpg' },
    { id: '7', status: 'Đang chờ xác nhận', quantity: 2, name: 'ONE PIECE - TẬP 66', date: "21/01/2024", image: 'https://product.hstatic.net/200000343865/product/35_9dbee6331a3e4a458e5864084e90005d_master.jpg' },
    { id: '8', status: 'Đã xác nhận', quantity: 2, name: 'ONE PIECE - TẬP 66', date: "21/01/2024", image: 'https://product.hstatic.net/200000343865/product/1_cd3e91d598a942589a0c7cc6fde58b0b_master.jpg' },
    { id: '9', status: 'Đang vận chuyển', quantity: 2, name: 'ONE PIECE - TẬP 66', date: "21/01/2024", image: 'https://lh3.googleusercontent.com/WaqKoYeaQ8qEP_b2zPfIVfgV7pGNuFI2z016nTeX71GevH7qMZtlkxkIlXupxsLH-B_FZrLvTo5KfHY3tl737UY8cewxXe79-giqvXsAT5wMUPBUvw=w570-e365' },
    { id: '10', status: 'Đã hủy', quantity: 2, name: 'ONE PIECE - TẬP 66', date: "21/01/2024", image: 'https://product.hstatic.net/200000343865/product/1_cd3e91d598a942589a0c7cc6fde58b0b_master.jpg' },
    { id: '11', status: 'Giao hàng thành công', quantity: 2, name: 'ONE PIECE - TẬP 66', date: "21/01/2024", image: 'https://product.hstatic.net/200000343865/product/35_9dbee6331a3e4a458e5864084e90005d_master.jpg' },
    { id: '12', status: 'Đã xác nhận', quantity: 2, name: 'ONE PIECE - TẬP 66', date: "21/01/2024", image: 'https://product.hstatic.net/200000343865/product/1_dae9c089ea264180bdbc174a8fe26861_master.jpg' },

    //Thêm dữ liệu khác nếu cần
];

const renderItem = ({ item }) => (
    <View style={styles.iteam}>
        <Image
            resizeMode="contain"
            source={{ uri: item.image }}
            style={styles.iteama}
        />

        <View style={styles.iteamb}>

            <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
            <Text>SL : {item.quantity} </Text>
            <Text>Ngày đặt hàng : {item.date}</Text>
            <Text>28.000 đ </Text>
            <Text style={{ fontWeight: "100" }} >{item.status}</Text>

        </View>

        {(item.status === 'Đang chờ xác nhận' || item.status === 'Đã xác nhận') && (
            <TouchableOpacity
                style={{
                    width: wp('17%'),
                    height: hp('5%'),
                    backgroundColor: "#9DDC2D",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: wp('2%'),
                    marginTop: hp('10%'),
                    borderRadius: 8,
                    marginLeft: wp('5%')

                }}
            >
                <Text>Hủy đơn</Text>
            </TouchableOpacity>
        )}

        {(item.status === 'Giao hàng thành công') && (
            <TouchableOpacity
                style={{
                    width: wp('17%'),
                    height: hp('5%'),
                    backgroundColor: "#9DDC2D",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: wp('2%'),
                    marginTop: hp('10%'),
                    borderRadius: 8,
                    marginLeft: wp('5%')

                }}
            >
                <Text>Đánh giá</Text>
            </TouchableOpacity>
        )}

        {(item.status === 'Đã hủy' || item.status === 'Đang vận chuyển') && (
            <View
                style={{
                    width: wp('17%'),
                    height: hp('5%'),
                    marginRight: wp('2%'),
                    marginTop: hp('10%'),
                    marginLeft: wp('5%')
                }}
            >
            </View>
        )}
    </View>

);

// const KeyExtractor = item => item.id;

const History_Screens = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [status, setstatus] = useState('Đã hủy')
    const [datalist, setdatalist] = useState(data)

    useEffect(() => {
        setStatusFilter(status);
    }, []);

    const setStatusFilter = status => {
        setdatalist([...data.filter(e => e.status === status)])
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




            <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"center",marginTop:hp('5%') }}>
                <Image
                    source={require('../Image/order.jpg')}
                    style={{
                        height: hp('3%'),
                        width: wp('7%'),
                        marginRight:wp('2%')
                    }}
                    resizeMode="contain"
                />
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>Đơn hàng</Text>

            </View>







            <View style={{ height: 50, marginTop: 50 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {
                        listTab.map(e => (

                            <Text
                                onPress={() => setStatusFilter(e.status)}
                                style={[styles.texttab, status === e.status && styles.texttabselection]} >
                                {e.status}
                            </Text>

                        ))
                    }
                </ScrollView>

            </View>



            {/* <View style={styles.listtab}>
                {
                    listTab.map(e => (

                        <Text
                            onPress={() => setStatusFilter(e.status)}
                            style={[styles.texttab, status === e.status && styles.texttabselection]} >
                            {e.status}
                        </Text>

                    ))
                }


            </View> */}


            <View style={{ height: hp('60%'), marginBottom: hp('5%') }}>
                <FlatList
                    data={datalist}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>





        </View>
    )
}

export default History_Screens

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: hp('5%'),
        backgroundColor: "#FFFFFF",
        alignItems: "center"

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
        flexDirection: "row",
        width: wp('100%'),
        height: hp('17%'),
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: hp('4%'),
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#F8F8FF",
        borderBlockColor: "#9DDC2D",

    }
    ,
    iteama: {
        width: wp('22%'),
        height: hp('15%'),
        marginLeft: wp('3%'),
    },
    iteamb: {
        marginLeft: wp('5%'),
        height: hp('17%'),
        alignItems: "flex-start",
        justifyContent: "space-around",
        marginTop: hp('1%'),
        marginBottom: hp('1%')
    }



})
