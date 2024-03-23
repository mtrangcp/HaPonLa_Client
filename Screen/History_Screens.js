import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert, Modal, Button, TextInput, TouchableHighlight } from "react-native";
import React, { useState, useEffect } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
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
    const [status, setstatus] = useState('2')
    const [datalist, setdatalist] = useState([])
    const [data, setdata] = useState([])
    const [id, setid] = useState('');
    const [fullname, setfullname] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await AsyncStorage.getItem('Login_Screens');
                if (userData) {
                    const parsedUserData = JSON.parse(userData);
                    setid(parsedUserData._id)
                    setfullname(parsedUserData.fullname)
                } else {
                    console.log('Không tìm thấy dữ liệu người dùng trong AsyncStorage');
                }
            } catch (error) {
                console.log('Lỗi khi lấy dữ liệu từ AsyncStorage:', error);
            }
        };
        fetchData();

    }, []);

    //lấy đơn hàng;
    useEffect(() => {
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
        laydonhang()
    }, [id]);


    useEffect(() => {
        
        setStatusFilter(status);
    }, [data]);

    const setStatusFilter = status => {
        // Convert status to a number
        const statusNumber = Number(status);
        const filteredData = data.filter(e => e.status === statusNumber);
        // console.log('Filtered Data:', filteredData)
        setstatus(status);
        setdatalist(filteredData);
    }
   

    


    const renderItem = ({ item }) => (
        <View style={{
            flexDirection: "row",
            width: wp('95%'),
            height: hp('16%'),
            borderColor: 'gray',
            borderWidth: 1,
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 10,
            marginBottom: hp('3%')

        }}>
            <View style={{ marginLeft: wp('3%') }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: hp('0.5%'), marginTop: hp('0.8%') }} >Mã đơn hàng </Text>
                <Text style={{ marginBottom: hp('0.5%') }} >Ngày đặt hàng </Text>
                <Text style={{ marginBottom: hp('0.5%') }} >Giờ đặt hàng </Text>
                <Text style={{ marginBottom: hp('0.5%') }} >Giá niêm yết </Text>
                <Text style={{ marginBottom: hp('0.5%') }} >Thành tiền</Text>
                <Text style={{}}></Text>

            </View>

            <View style={{ marginRight: wp('3%'), alignItems: "flex-end" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: hp('0.8%') }}>{item._id} </Text>
                <Text style={{ marginBottom: hp('0.5%') }}>{formatDate(item.create_at)}</Text>
                <Text style={{ marginBottom: hp('0.5%') }}>{formatTime(item.create_at)}</Text>
                <Text style={{ marginBottom: hp('0.5%') }}>{formatCurrency(item.temp_price)} VND</Text>
                <Text style={{ marginBottom: hp('0.5%'), fontWeight: "bold" }}>{formatCurrency(item.real_price)} VND</Text>
                <Text style={{ color: "#C0C0C0" }}
                    onPress={() => { props.navigation.navigate('Order_Details_Screens', { billchitiet: item }) }}
                >Chi tiết</Text>
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

    const formatCurrency = (amount) => {
        const currencyString = amount.toString();
        // Thêm dấu phân cách giữa hàng nghìn, triệu, tỷ...
        const formattedCurrency = currencyString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return formattedCurrency;
    };

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
                <Text style={styles.T1} >{fullname}</Text>
            </View>

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
                <Text style={{ fontSize: 25, fontWeight: "bold", }}>Đơn hàng</Text>

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
            <View style={{ height: hp('60%'), marginBottom: hp('5%') }}>
                <FlatList
                    data={datalist}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
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
})