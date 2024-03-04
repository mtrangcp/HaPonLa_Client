import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import PagerView from 'react-native-pager-view';
import {useState, useEffect} from "react";
import { getDatabase, ref, set, onValue,remove } from "firebase/database";
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const MyPager = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyA0Uq3aiFWPGOtQa--ylOdnNoO289uBJhc",
        authDomain: "asmdnt-108b9.firebaseapp.com",
        projectId: "asmdnt-108b9",
        storageBucket: "asmdnt-108b9.appspot.com",
        messagingSenderId: "342480935733",
        appId: "1:342480935733:web:4b02251704a9f5e4748a7c",
        measurementId: "G-7C6LLW5QZH"

    };
    const app = initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);

    const [dulieu, setDuLieu] = useState(null)
    const [anh, setAnh] = useState([]);

    useEffect(()=> {
        fetch('https://www.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=d04942d33ab090510b9c59a4f23f9841&user_id=197733463%40N07&format=json&nojsoncallback=1')
            .then(response => response.json())
            .then(data => {
                setDuLieu(data.photos.photo)
            })

            .catch((error) => {
                // Handle any errors that occur
                console.error(error);
            });
    },[])

    useEffect(() => {
        const database = getDatabase();
        const dbRef = ref(database, '/NewPhoto/');
        let PhotoArr = [];
        onValue(dbRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                const photo = {id: childKey,info: childData};
                PhotoArr.push(photo);
                setAnh(PhotoArr);
            })
        }, {
            onlyOnce: false
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <PagerView style={styles.viewPager} initialPage={0}>
                <View style={{marginTop: 50, justifyContent: "flex-start", alignItems: 'center'}} key="1">
                    <Text style={{fontWeight: 'bold', fontSize: 30}}>XEM ẢNH YÊU THÍCH</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>tranghtmph26263</Text>
                </View>
                <View style={styles.page} key="2">
                    <FlatList data={dulieu} renderItem={({item}) => {
                        return (<View>
                            <Text style={styles.abc}>{" name: "+item.id}</Text>
                            <Image style={styles.image} source={{uri: "https://live.staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+"_w.jpg"}}/>
                            <Button title={"Download"} onPress={()=>{
                                const database = getDatabase();
                                const UrlImage= "https://live.staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+"_w.jpg";
                                set(ref(database, 'NewPhoto/' + item.id), {
                                    linkImage: UrlImage,
                                });
                                alert("download successful");
                            }}/>
                        </View>)}
                    }/>
                </View>
                <View style={styles.page} key="3">
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Danh sach downloads</Text>
                    <FlatList numColumns={2} data={anh} extraData={anh} renderItem={
                        ({item}) => {
                            return(
                                <View>
                                    <Image style={styles.image} source={{uri: item.info.linkImage}}/>
                                </View>

                            )

                        }}/>
                </View>
            </PagerView>
        </View>
    );
};

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
    page: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50,
    },image: {
        width: 170,
        height: 170,
        borderRadius: 10,
        margin: 5,
    },abc:{
        margin:10,
        fontSize: 15,
        fontWeight: "bold"
    },

});

export default MyPager;



