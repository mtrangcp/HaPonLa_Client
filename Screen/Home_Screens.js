import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert, Modal, Button, TextInput, TouchableHighlight } from "react-native";
import React, { useState, useEffect } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Home_Screens = ( ) => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');

  const [filteredBooks, setFilteredBooks] = useState([]);

  const [books, setBooks] = useState([
    { id: 1, name: 'Book 1', price: '10', image: require('../Image/tests1.jpg') },
    { id: 2, name: 'Book 2', price: '15', image: require('../Image/tests1.jpg') },
    { id: 3, name: 'Book 3', price: '20', image: require('../Image/tests1.jpg') },
    { id: 4, name: 'Book 1', price: '10', image: require('../Image/tests1.jpg') },
    { id: 5, name: 'Book 2', price: '15', image: require('../Image/tests1.jpg') },
    { id: 6, name: 'Book 3', price: '20', image: require('../Image/tests1.jpg') },
    // Add more books as needed
  ]);

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0); // State để lưu trữ chỉ mục của banner hiện tại
  const banners = [require('../Image/banner1.png'), require('../Image/banner2.png'), require('../Image/banner1.png')]; // Danh sách các banner

    // Sử dụng useEffect để thiết lập việc chuyển đổi tự động giữa các banner
    useEffect(() => {
        const interval = setInterval(() => {
        // Chuyển đến banner tiếp theo
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000); // Thời gian chuyển đổi, ở đây là 5000ms (5 giây)

        // Xóa interval khi component bị unmount
        return () => clearInterval(interval);
    }, []); 


  
    const handleSearch = () => {
      const query = searchQuery.toLowerCase();
      const filteredBooks = books.filter(book =>
        book.name.toLowerCase().includes(query)
      );
      setFilteredBooks(filteredBooks);
    };
    
  const renderBookItem = ({ item }) => (
    <TouchableOpacity 
    onPress={() => navigation.navigate('Detail_Screens', { book: item })}
    style={styles.bookItem}>
      <Image source={item.image} style={styles.bookImage} />
      <Text style={styles.bookName}>{item.name}</Text>
      <Text style={styles.bookPrice}>${item.price}</Text>
    </TouchableOpacity>
  );




  return (
    <View style={styles.container}>
      {/* Search */}
      <View style={styles.V1}>

        <TouchableOpacity style={{ marginRight: 20 }}>
          {/* <Image
            source={require('../Image/back.png')}
            style={[styles.i1, { tintColor: '#9DDC2D' }]}
            resizeMode="contain"
          /> */}
        </TouchableOpacity>

        <View style={styles.search}>
          <Image
            source={require('../Image/search.jpg')}
            style={styles.i2}
            resizeMode="contain"
          />

          <TextInput
            placeholder="Search Product"
            onChangeText={text => setSearchQuery(text)} 
            value={searchQuery}
            onSubmitEditing={handleSearch}
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
      
      

      <ScrollView style={{ flex: 1 }}>

        <View style={styles.bannerContainer}>
          <Image
            source={banners[currentBannerIndex]}
            style={styles.bannerImage}
            resizeMode="contain"
          />
        </View>

        <View style={{ backgroundColor: 'green', height:40, justifyContent: 'center', alignItems: 'center', marginStart:50, marginEnd: 50}}>
          <Text style={{ color: 'white', fontSize:20, fontWeight: 'bold',  }}>
            Sách mới
          </Text>
        </View>

        <View style={styles.bookListContainer}>
          <FlatList
            data={filteredBooks.length > 0 ? filteredBooks : books}
            renderItem={renderBookItem}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

        </View>

        <View style={{ backgroundColor: 'green', height:40, justifyContent: 'center', alignItems: 'center', marginStart:50, marginEnd: 50}}>
          <Text style={{ color: 'white', fontSize:20, fontWeight: 'bold',  }}>
            Sách mới
          </Text>
        </View>

        <View style={styles.bookListContainer}>
          <FlatList
            data={filteredBooks.length > 0 ? filteredBooks : books}
            renderItem={renderBookItem}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ backgroundColor: 'green', height:40, justifyContent: 'center', alignItems: 'center', marginStart:50, marginEnd: 50}}>
          <Text style={{ color: 'white', fontSize:20, fontWeight: 'bold',  }}>
            Sách mới
          </Text>
        </View>

        <View style={styles.bookListContainer}>
          <FlatList
            data={filteredBooks.length > 0 ? filteredBooks : books}
            renderItem={renderBookItem}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{ backgroundColor: 'green', height:40, justifyContent: 'center', alignItems: 'center', marginStart:50, marginEnd: 50}}>
          <Text style={{ color: 'white', fontSize:20, fontWeight: 'bold',  }}>
            Gợi ý hôm nay
          </Text>
        </View>

        <View style={styles.bookListContainer2}>
          <FlatList
            data={filteredBooks.length > 0 ? filteredBooks : books}
            renderItem={renderBookItem}
            keyExtractor={item => item.id.toString()}
            horizontal={false}
            numColumns={3}
          />
        </View>
      </ScrollView>


       {/* Bottom navigation */}
       <View style={styles.bottomNavigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Home_Screens')}>
              <Image source={require('../Image/home2.png')} style={styles.bottomIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Category_Screens')}>
              <Image source={require('../Image/category.png')} style={styles.bottomIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart_Screens')}>
              <Image source={require('../Image/cart.png')} style={styles.bottomIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('User_Information_Screens')}>
              <Image source={require('../Image/user.png')} style={styles.bottomIcon} />
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home_Screens

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
    alignItems: 'center',
    marginBottom: hp('5%'),
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
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 30,
  },
  bottomIcon: {
    width: 35,
    height: 35,
    margin: 35,
    marginBottom:10
  },
  bannerContainer: {
    width: wp('100%'),
    height: hp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },



  bookListContainer: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    height:185
  },
  bookListContainer2: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    
  },
  bookItem: {
    marginRight: 25,
    marginLeft: 25,
  },
  bookImage: {
    width: 75,
    height: 105,
    marginRight: 10
  },
  bookName: {
    marginTop: hp('1%'),
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green'
  },
  bookPrice: {
    fontSize: 14,
    fontWeight:'bold'
  },
})