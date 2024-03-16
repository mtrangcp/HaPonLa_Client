import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert, Modal, Button, TextInput, TouchableHighlight } from "react-native";
import React, { useState, useEffect } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

const listTab = [
    {
        status: '0',
        text: 'Đã hủy'
    },
    {
        status: '1',
        text: 'Đang chờ xác nhận'
    },
    {
        status: '2',
        text: 'Đã xác nhận'
    },
    {
        status: '3',
        text: 'Đang vận chuyển'
    },
    {
        status: '4',
        text: 'Giao hàng thành công'
    }
];
const History_Screens = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [status, setstatus] = useState('2')
    const [datalist, setdatalist] = useState([])
    const [data, setdata] = useState([])
    const [id, setid] = useState('');

    //lấy id người dùng
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await AsyncStorage.getItem('Login_Screens');
                if (userData) {
                    const parsedUserData = JSON.parse(userData);
                    setid(parsedUserData._id)
                } else {
                    console.log('Không tìm thấy dữ liệu người dùng trong AsyncStorage');
                }
            } catch (error) {
                console.log('Lỗi khi lấy dữ liệu từ AsyncStorage:', error);
            }
        };
        fetchData();

    }, []);

    //lấy đơn hàng
    useEffect(() => {
        laydonhang()
    }, [id]);

    useEffect(() => {
        setStatusFilter(status);
    }, [data]);

    const laydonhang = async () => {
        try {
            const response = await fetch('http://192.168.1.9:3000/api/bills');
            const json = await response.json();
            const filteredData = json.payload.data.filter(order => order.id_user === id);
            setdata(filteredData);
        } catch (error) {
            console.error(error);
        }
    }

    const setStatusFilter = status => {
        // Convert status to a number
        const statusNumber = Number(status);
        const filteredData = data.filter(e => e.status === statusNumber);
        // console.log('Filtered Data:', filteredData)
        setdatalist(filteredData);
        setstatus(status);
    }


    const renderItem = ({ item }) => (
        <View style={{
            flexDirection: "row",
            width: wp('95%'),
            height: hp('13%'),
            // borderColor: 'gray',
            borderWidth: 1,
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius:10

        }}>
            <View style={{ marginLeft: wp('3%') }}>
                <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: hp('0.5%') }} >Mã đơn hàng </Text>
                <Text style={{ marginBottom: hp('0.5%') }} >Ngày đặt hàng </Text>
                <Text style={{ marginBottom: hp('0.5%') }} >Giờ đặt hàng </Text>
                <Text style={{ marginBottom: hp('0.5%') }} >Giá niêm yết </Text>
                <Text style={{ marginBottom: hp('0.5%') }} >Thành tiền</Text>

            </View>

            <View style={{ marginRight: wp('3%'), alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold", }}>{item._id} </Text>
                    <Text style={{ marginBottom: hp('0.5%') }}>{formatDate(item.create_at)}</Text>
                    <Text style={{ marginBottom: hp('0.5%') }}>{formatTime(item.create_at)}</Text>
                    <Text style={{ marginBottom: hp('0.5%') }}>{item.temp_price} đ</Text>
                    <Text style={{ marginBottom: hp('0.5%'),fontWeight: "bold" }}>{item.real_price} đ</Text>
            </View>



        </View>
    );

    const formatDate = isoDate => {
        const date = new Date(isoDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const formatTime = isoDate => {
        const date = new Date(isoDate);
        return date.toLocaleTimeString(); // Trả về giờ phút giây (hh:mm:ss)
    };

    return (
        <View style={styles.container}>
            {/* search */}
            {/* <View style={styles.V1}>
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


            </View> */}




            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: hp('5%') }}>
                <Image
                    source={require('../Image/order.jpg')}
                    style={{
                        height: hp('3%'),
                        width: wp('7%'),
                        marginRight: wp('2%')
                    }}
                    resizeMode="contain"
                />
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>Đơn hàng</Text>

            </View>






            {/* Tab */}
            <View style={{ height: 50, marginTop: 50 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    {
                        listTab.map(e => (

                            <Text
                                onPress={() => setStatusFilter(e.status)}
                                style={[styles.texttab, status === e.status && styles.texttabselection]} >
                                {e.text}
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
    // iteam: {
    //     flexDirection: "row",
    //     width: wp('100%'),
    //     height: hp('17%'),
    //     borderColor: 'gray',
    //     borderWidth: 1,
    //     marginBottom: hp('4%'),
    //     justifyContent: "space-around",
    //     alignItems: "center",
    //     backgroundColor: "#F8F8FF",
    //     borderBlockColor: "#9DDC2D",

    // }
    // ,
    // iteama: {
    //     width: wp('22%'),
    //     height: hp('15%'),
    //     marginLeft: wp('3%'),
    // },
    // iteamb: {
    //     marginLeft: wp('5%'),
    //     height: hp('17%'),
    //     alignItems: "flex-start",
    //     justifyContent: "space-around",
    //     marginTop: hp('1%'),
    //     marginBottom: hp('1%')
    // }
    iteam2: {
        width: wp('90%'),
        height: hp('9%'),
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: "center",
        marginBottom: hp('1.5%'),
        padding: wp('5%'),

    }


})

// let url = 'http://192.168.1.9:3000/api/bills'
// const response = await fetch(url)
// const json = await response.json(); // Chuyển đổi phản hồi thành đối tượng JavaScript
// console.log('json nè:' +json.payload.data)
//  setdata(json.payload.data)
//   console.log(data)
