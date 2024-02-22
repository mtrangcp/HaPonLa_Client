import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert, Modal, Button, TextInput, TouchableHighlight } from "react-native";
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


            <ScrollView >
                <View style={styles.V2} >
                    <Image
                        source={require('../Image/tests1.jpg')}
                        style={styles.i3}
                        resizeMode="contain"
                    />
                    <View>
                        <Text numberOfLines={3} style={{ fontSize: 20, fontWeight: 'bold', marginLeft: wp('5%'), marginRight: wp('3%') }} >Tô điểm sắc màu</Text>
                        <Text style={{ fontSize: 16, marginTop: hp('5%'), marginLeft: wp('5%'), }} >Tác giả : </Text>
                        <Text style={{ fontSize: 20, marginTop: hp('5%'), marginLeft: wp('5%'), color: '#9DDC2D' }} >81.000 đ </Text>
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 16, marginTop: hp('3%'), marginLeft: wp('8%'), }} >Thể loại : </Text>
                    <Text style={{ fontSize: 16, marginTop: hp('3%'), marginLeft: wp('8%'), }} >Số trang : </Text>
                    <Text style={{ fontSize: 16, marginTop: hp('3%'), marginLeft: wp('8%'), }} >NXB : </Text>
                    <Text style={{ fontSize: 16, marginTop: hp('3%'), marginLeft: wp('8%'), }} >Phát hành : </Text>
                    <Text style={{ fontSize: 16, marginTop: hp('3%'), marginLeft: wp('8%'), }} >Giới thiệu : </Text>
                    <Text numberOfLines={4} style={{ fontSize: 16, marginTop: hp('3%'), marginLeft: wp('10%'), marginRight: wp('10%') }} >Một ngày, nhà thiết kế tự do Yano Saki gặp được Yuu, cậu sinh viên đại học với mái tóc nhuộm đỏ rực rỡ. Saki rủ “tấm chiếu mới” ấy ra rạp xem phim người lớn hòng chọc đùa cậu một phen, nhưng khuôn mặt đỏ ửng và lời mời “ngay sau đó” của Yuu đã vô tình khơi dậy ham muốn trong lòng Saki. : </Text>
                </View>

                <View style={styles.V3}>
                    <TouchableHighlight>
                        <View style={styles.button}>
                            <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 15 }} >Thêm vào giỏ hàng</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <View style={styles.button}>
                            <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 15 }} >Mua ngay</Text>
                        </View>
                    </TouchableHighlight>
                </View>



            </ScrollView>
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
        alignItems: 'center'
    },

    V2: {
        height: hp('30%'),
        width: wp('100%'),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp('1%')

    },

    V3: {
        height: hp('10%'),
        width: wp('100%'),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp('1%'),
        justifyContent: "center"

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

    i3: {
        height: hp('25%'),
        width: wp('40%'),
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

    button: {
        
        borderRadius: 5,
        height: hp('4.5%'),
        margin: wp('3%'),
        alignItems: 'center',
        backgroundColor: '#9DDC2D',
        padding: 10,
        justifyContent: "center"
    },
})