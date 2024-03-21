import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert, Modal, Button, TextInput, TouchableHighlight } from "react-native";
import React, { useState, useEffect } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";

const renderItem = ({ item }) => (
    <View style={styles.iteam}>
        <Image source={{ uri: item.image[0] }} style={styles.i3} resizeMode="contain" />
        <View style={{ marginLeft: wp('4%'), }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', }} >{item.name}</Text>
            <Text style={{ marginTop: hp('1%') }}>{formatCurrency(item.price)} VND</Text>
            <Text style={{ marginTop: hp('1%') }}>Số lượng : {item.quantity}</Text>
        </View>


    </View>
);

const formatCurrency = (amount) => {
    // Định dạng số tiền thành chuỗi
    const currencyString = amount.toString();
    // Thêm dấu phân cách giữa hàng nghìn, triệu, tỷ...
    const formattedCurrency = currencyString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedCurrency;
};


const Order_Details_Screens = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [datalist, setdatalist] = useState([])


    const [temp_price, settemp_price] = useState(props.route.params.billchitiet.temp_price);
    const [real_price, setreal_price] = useState(props.route.params.billchitiet.real_price)
    const [status, setstatus] = useState(props.route.params.billchitiet.status)
    const [id_discount, setid_discount] = useState(props.route.params.billchitiet.id_discount)
    const [detail, setdetail] = useState(props.route.params.billchitiet.detail)
    const [method, setmethod] = useState(props.route.params.billchitiet.method)



    useEffect(() => {
        laybilliteam();
    }, []);

    const laybilliteam = async () => {
        try {
            const billItems = [];
            for (const itemId of detail) {
                const response = await fetch(`http://192.168.1.9:3000/api/bill_items/${itemId}`);
                const json = await response.json();
                const itemData = json.payload.data;
                billItems.push(itemData);
                // Call API with id_book
                const bookResponse = await fetch(`http://192.168.1.9:3000/api/books/${itemData.id_book}`);
                const bookJson = await bookResponse.json();
                const bookData = bookJson.payload.data;
                // Combine billItems and bookData

                //sử dụng spread operator (...) để tạo một đối tượng mới có tên là combinedData. Toán tử spread (...) trong JavaScript được sử dụng để sao chép các thuộc tính của một đối tượng hoặc một mảng vào một đối tượng hoặc mảng khác. Trong trường hợp này, ...itemData sao chép tất cả các thuộc tính của itemData, và ...bookData sao chép tất cả các thuộc tính của bookData. Kết quả là một đối tượng mới (combinedData) có chứa tất cả các thuộc tính từ cả itemData và bookData.
                // const combinedData = { ...itemData, ...bookData };     
                //cập nhật state datalist bằng cách sử dụng hàm callback trong setdatalist. Hàm callback này nhận vào tham số là prevDataList, đại diện cho giá trị trước đó của datalist. Bằng cách sử dụng spread operator [...prevDataList, combinedData], chúng ta tạo một mảng mới bằng cách sao chép tất cả các phần tử từ mảng trước đó (prevDataList) và thêm combinedData vào cuối mảng mới này. Cuối cùng, setdatalist được gọi để cập nhật state datalist với mảng mới đã được tạo ra.
                // setdatalist(prevDataList => [...prevDataList, combinedData]);
                const combinedData = itemData && bookData ? { ...itemData, ...bookData } : null;
                if (combinedData) {
                    setdatalist(prevDataList => [...prevDataList, combinedData]);
                } else {
                    console.error('itemData or bookData is undefined');
                }
            }
        } catch (error) {
            console.error(error);
        }
    }




    //format tiền
    

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
                        onChangeText={text => setSearchQuery(text)} // Corrected onChangeText function
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
                    keyExtractor={item => item.id}
                />
            </View>

            <ScrollView>


                <View style={styles.V3}>
                    <View style={styles.V4}>

                        <View >
                            <Text style={styles.T1} >Tổng tiền hàng</Text>

                            <Text style={styles.T1}>Mã giảm giá</Text>
                        </View>

                        <View >
                            <Text style={styles.T2}>{formatCurrency(temp_price)} VND</Text>

                            <Text style={styles.T2}>{id_discount}</Text>

                        </View>



                    </View>
                    {/* <Text style={{ color: "#808080", }}> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text> */}
                    <View style={styles.V4}>
                        <Text style={styles.T3}>Tổng thanh toán </Text>
                        <Text style={styles.T4}>{formatCurrency(real_price)} VND</Text>
                    </View>
                    <View style={styles.V4}>
                        <View>
                            <Text style={styles.T1} >Phương thứ thanh toán : {method}</Text>
                            <Text style={styles.T1}>Địa chỉ : Hà Nội</Text>
                            <Text style={styles.T1}>Người nhận : Hà Trang</Text>
                            <Text style={styles.T1}>Trạng thái : {status}</Text>
                        </View>

                    </View>

                </View>

            </ScrollView>


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
        alignItems: "center",
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: hp('1.5%'),
        flexDirection: 'row',
        justifyContent: "flex-start",
        borderRadius: 10

    },
    V2:
    {
        width: wp('90%'),
        height: hp('26%'),
        marginTop: hp('2%'),
    },
    V3: {
        width: wp('90%'),
        height: hp('55%'),
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: hp('1.5%'),
        marginTop: hp('1.5%'),
        borderRadius: 10,



    },
    V4: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: ('4%')
    },
    T1: {
        fontSize: 18,
        color: "#808080",
        marginTop: hp('2%'),
    },
    T2: {
        fontSize: 17,
        color: "#000000",
        marginTop: hp('2%'),
    },
    T3: {
        fontWeight: 'bold',
        fontSize: 16
    },
    T4: {
        fontSize: 18,
        color: "#9DDC2D",
    }

})