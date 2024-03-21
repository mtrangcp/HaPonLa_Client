import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert, Modal, Button, TextInput, TouchableHighlight } from "react-native";
import React, { useState, useEffect } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const User_Information_Screens = (props) => {

    //lấy thông tin người dùng
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [email2, setemail2] = useState('');
    const [phone2, setphone2] = useState('');
    const [gender, setgender] = useState('');
    const [id, setid] = useState('');

    // useEffect(() => {
    //     const laythongtin = async () =>{
    //         let url = 'http://192.168.1.9:3000/api/user/' + id;
    //         console.log(id)
    //         console.log(url)
    //         const response = await fetch(url); // load dữ liệu
    //         const json = await response.json(); // chuyển dữ liệu thành json
    //         // console.log(json)
    //         setfullname(json.data.fullname);
    //         setemail(json.data.email);
    //         setphone(json.data.phone);
    //         setgender(json.data.gender);
    //         setemail2(json.data.email)
    //     }
    //     laythongtin()
    // }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await AsyncStorage.getItem('Login_Screens');
                if (userData) {
                    const parsedUserData = JSON.parse(userData);
                    // setfullname(parsedUserData.fullname);
                    // setemail(parsedUserData.email);
                    // setphone(parsedUserData.phone);
                    // setgender(parsedUserData.gender);

                    setid(parsedUserData._id)
                    // console.log(parsedUserData._id)
                    // console.log(id)

                    let url_api = 'http://192.168.1.9:3000/api/user/' + parsedUserData._id;
                    // console.log(url_api)
                    // laythongtin()
                    // try {
                    //     const response = await fetch(url_api); // load dữ liệu
                    //     const json = await response.json(); // chuyển dữ liệu thành json
                    //     // console.log(json)
                    //     setfullname(json.data.fullname);
                    //     setemail(json.data.email);
                    //     setphone(json.data.phone);
                    //     setgender(json.data.gender);
                    //     setemail2(json.data.email)
                    // } catch (error) {
                    //     console.error(error);
                    // }
                } else {
                    console.log('Không tìm thấy dữ liệu người dùng trong AsyncStorage');
                }
            } catch (error) {
                console.log('Lỗi khi lấy dữ liệu từ AsyncStorage:', error);
            }
        };

        fetchData();
    }, []);

    const laythongtin = async () => {
        let url = 'http://192.168.1.9:3000/api/user/' + id;
        // console.log(id)
        // console.log(url)
        const response = await fetch(url); // load dữ liệu
        const json = await response.json(); // chuyển dữ liệu thành json
        // console.log(json)
        setfullname(json.data.fullname);
        setemail(json.data.email);
        setphone(json.data.phone);
        setphone2(json.data.phone);
        setgender(json.data.gender);
        setemail2(json.data.email)
        setSelectedGender(json.data.gender)
        setSelectedGender2(json.data.gender)
    }

    useEffect(() => {
        laythongtin(); // Gọi hàm laythongtin ở đây
    }, [id]);

    //sửa thông tin người dùng
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);

    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedGender2, setSelectedGender2] = useState(null);

    const handleGenderSelection = (gender) => {
        setSelectedGender(gender);
    };
    const handleGenderSelection2 = (gender) => {
        setSelectedGender2(gender);
    };
    const Sua = async () => {
        // tạo đối tượng dữ liệu

        if ( email2.length === 0 || phone2.length === 0) {
            Alert.alert('', 'Vui lòng điền đầy đủ thông tin');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email2)) {
            Alert.alert('', 'Email không hợp lệ');
            return;
        }

        const phoneRegex = /^\d{10,11}$/;
        if (!phoneRegex.test(phone2)) {
            Alert.alert('', 'Số điện thoại không hợp lệ');
            return;
        }
        let url_api = 'http://192.168.1.9:3000/api/user/update/' + id;
        // console.log(url_api)
        fetch(url_api, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullname: fullname, email: email2, phone: phone2, gender: selectedGender2 })
        })
            .then((res) => {
                if (res.status == 200)
                setModalVisible(false)
                setModalVisible2(false)
                setModalVisible3(false)
                laythongtin()

            })
            .catch((ex) => {
                console.log(ex);
            });
        
    }
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

            <View>
                {/* giới tính */}
                <TouchableOpacity
                    style={styles.B1}
                    onPress={() => { setModalVisible(true); }}
                >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={require('../Image/sex.jpg')}
                            style={styles.I1}
                            resizeMode="contain"
                        />

                        <Text style={styles.T2}>Giới tính</Text>
                    </View>
                    <Text style={[styles.T3, { textAlign: 'right' }]}>
                        {gender}
                    </Text>
                </TouchableOpacity>
                {/* email */}
                <TouchableOpacity
                    style={styles.B1}
                    onPress={() => { setModalVisible2(true) }}
                >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={require('../Image/email.png')}
                            style={styles.I1}
                            resizeMode="contain"
                        />
                        <Text style={styles.T2}>Email</Text>
                    </View>

                    <Text style={[styles.T3, { textAlign: 'right' }]} numberOfLines={1} ellipsizeMode='tail'>
                        {email}
                    </Text>

                </TouchableOpacity>
                {/* số điện thoại */}
                <TouchableOpacity
                    style={styles.B1}
                    onPress={() => { setModalVisible3(true); }}
                >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={require('../Image/phone2.jpg')}
                            style={styles.I1}
                            resizeMode="contain"
                        />

                        <Text style={styles.T2}>Số điện thoại</Text>
                    </View>
                    <Text style={[styles.T3, { textAlign: 'right' }]}>
                        {phone}
                    </Text>
                </TouchableOpacity>
                {/* địa chỉ */}
                <TouchableOpacity
                    style={styles.B1}
                >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={require('../Image/address.jpg')}
                            style={styles.I1}
                            resizeMode="contain"
                        />

                        <Text style={styles.T2}>Địa chỉ</Text>
                    </View>
                    <Image
                        source={require('../Image/next.png')}
                        style={styles.I1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                {/* setting */}
                <TouchableOpacity
                    style={styles.B1}
                >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={require('../Image/setting.jpg')}
                            style={styles.I1}
                            resizeMode="contain"
                        />

                        <Text style={styles.T2}>Cài đặt</Text>
                    </View>
                    <Image
                        source={require('../Image/next.png')}
                        style={styles.I1}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>

            {/* modal giới tính */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.igender}>
                            <View style={styles.vgender1} >
                                <Image
                                    source={require('../Image/gender.png')}
                                    style={styles.i1}
                                    resizeMode="contain"
                                />
                                <Text style={{ marginLeft: wp('1%'), fontWeight: "bold", fontSize: 18 }} >Gender :</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                                <TouchableOpacity
                                    style={[styles.buttongender, selectedGender2 === 'MALE' && styles.selectedButton]}
                                    onPress={() => handleGenderSelection2('MALE')}
                                >
                                    <Text style={styles.buttonText}>Male</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.buttongender, selectedGender2 === 'FEMALE' && styles.selectedButton]}
                                    onPress={() => handleGenderSelection2('FEMALE')}
                                >
                                    <Text style={styles.buttonText}>Female</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.buttongender, selectedGender2 === 'OTHER' && styles.selectedButton]}
                                    onPress={() => handleGenderSelection2('OTHER')}
                                >
                                    <Text style={styles.buttonText}>Other</Text>
                                </TouchableOpacity>
                                <View></View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", width: wp('70%'), justifyContent: "space-around", alignItems: "center" }}>
                            <TouchableOpacity style={styles.buttonmodal} activeOpacity={0.7} onPress={() => { setModalVisible(false),setSelectedGender2(selectedGender) }}>
                                <Text style={styles.textbttnmodal} >Hủy</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonmodal} activeOpacity={0.7}
                            onPress={Sua} >
                                <Text style={styles.textbttnmodal} >OK</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </Modal>

            {/* modal email */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    setModalVisible2(!modalVisible2);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ height: hp('15%'), width: wp('70%'), alignItems: "center" }} >
                            <Text style={{ fontSize: 20, fontWeight: "bold" }} >Thay đổi email </Text>
                            <View style={styles.input}>
                                <Image
                                    source={require('../Image/email2.png')}
                                    style={styles.i1}
                                    resizeMode="contain"
                                />
                                <TextInput style={styles.textinput}
                                    onChangeText={(txt) => { setemail2(txt) }}
                                    value={email2}
                                />
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", width: wp('70%'), justifyContent: "space-around", alignItems: "center" }}>
                            <TouchableOpacity style={styles.buttonmodal} activeOpacity={0.7} onPress={() => { setModalVisible2(false), setemail2(email) }}>
                                <Text style={styles.textbttnmodal} >Hủy</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonmodal} activeOpacity={0.7}
                                onPress={Sua}
                            >
                                <Text style={styles.textbttnmodal} >OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </Modal>
            {/* modal sdt */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible3}
                onRequestClose={() => {
                    setModalVisible3(!modalVisible3);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ height: hp('15%'), width: wp('70%'), alignItems: "center" }} >
                            <Text style={{ fontSize: 20, fontWeight: "bold" }} >Thay đổi số điện thoại </Text>

                            <View style={styles.input}>
                                <Image
                                    source={require('../Image/phone.png')}
                                    style={styles.i1}
                                    resizeMode="contain"
                                />
                                <TextInput style={styles.textinput}
                                    placeholder="Phone"
                                    onChangeText={(text) => setphone2(text)}
                                    value={phone2}
                                />


                            </View>

                        </View>

                        <View style={{ flexDirection: "row", width: wp('70%'), justifyContent: "space-around", alignItems: "center" }}>
                            <TouchableOpacity style={styles.buttonmodal} activeOpacity={0.7} onPress={() => { setModalVisible3(false), setphone2(phone) }}>
                                <Text style={styles.textbttnmodal} >Hủy</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonmodal} activeOpacity={0.7}
                                onPress={Sua}>
                                <Text style={styles.textbttnmodal} >OK</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </Modal>


        </View>
    )
}

export default User_Information_Screens

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
    I1: {
        height: hp('4%'),
        width: wp('8%'),
    },
    B1: {
        flexDirection: "row",
        margin: ('5%'),
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: hp('4%')
    },
    T1: {
        fontSize: 18,
        fontStyle: "italic",
        fontWeight: "bold",
        marginLeft: wp('3%')
    },
    T2: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: wp('4%'),
    },
    T3: {
        marginRight: wp('4%'),
        fontSize: 17,
        color: "#9098B1",
        width: wp('50%'),

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: wp('73%'), // Set modal width
        height: hp('27%'), // Set modal height
        justifyContent: 'center',
        alignItems: 'center',
    },
    igender: {
        height: hp('15%'),
        width: wp('70%'),
    },
    vgender1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: wp('2.5%')

    },
    buttongender: {
        backgroundColor: '#f0f0f0',
        height: hp('5%'),
        width: wp('20%'),
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedButton: {
        backgroundColor: '#9DDC2D',
    },
    i1: {
        height: hp('6%'),
        width: wp('6%'),
        marginLeft: wp('2%'),
    },
    buttonmodal: {
        backgroundColor: "#9DDC2D",
        height: hp('5%'),
        width: wp('15%'),
        alignItems: "center",
        justifyContent: "center",
        marginBottom: hp('1%'),
        borderRadius: 10,

    },
    textbttnmodal: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    input: {
        height: hp('6%'),
        width: wp('60%'),
        marginTop: hp('2%'),
        borderWidth: 0.3,
        borderRadius: 4,
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: 'center',

    },
    textinput: {
        width: wp('50%'),
        paddingLeft: wp('2%'),

    },
})