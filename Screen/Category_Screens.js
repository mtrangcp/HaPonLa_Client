import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert, Modal, Button, TextInput, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Category_Screens = ( ) => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('Tình cảm'); // Thể loại được chọn

  const [filteredBooks, setFilteredBooks] = useState([]);


  const bookData = {
    'Tình cảm': [
      { id: 1, name: 'Sách 1', image: require('../Image/tests1.jpg'), price: 100 },
      { id: 2, name: 'Sách 2', image: require('../Image/tests1.jpg'), price: 120 },
      { id: 3, name: 'Sách 3', image: require('../Image/tests1.jpg'), price: 90 }
    ],
    'Trinh thám': [
      { id: 4, name: 'Sách 4', image: require('../Image/tests1.jpg'), price: 110 },
      { id: 5, name: 'Sách 5', image: require('../Image/tests1.jpg'), price: 130 },
      { id: 6, name: 'Sách 6', image: require('../Image/tests1.jpg'), price: 95 }
    ],
    'Manga': [
      { id: 7, name: 'Sách 7', image: require('../Image/tests1.jpg'), price: 80 },
      { id: 8, name: 'Sách 8', image: require('../Image/tests1.jpg'), price: 100 },
      { id: 9, name: 'Sách 9', image: require('../Image/tests1.jpg'), price: 85 }
    ]
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail_Screens', { book: item })}
      style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
      <Image source={item.image} style={{ width: 50, height: 70, marginRight: 10 }} />
      <Text>{item.name}</Text>
      <Text style={{ marginLeft: 'auto' }}>Price: ${item.price}</Text>
    </TouchableOpacity>
  );

  
  const handleSearch = () => {
    const filteredBooks = bookData[selectedCategory].filter(book =>
        book.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filteredBooks);
  };



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
      
      <View style={{ flex: 1 }}>
        {/* Hiển thị các tab thể loại */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 10 }}>
          {Object.keys(bookData).map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCategory(category)}
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10
              }}>
              <Text style={{ fontSize: 18, fontWeight: selectedCategory === category ? 'bold' : 'normal', color: selectedCategory === category ? 'green' : 'black' }}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Hiển thị danh sách sách dựa trên thể loại được chọn */}
        <FlatList
          data={filteredBooks.length > 0 ? filteredBooks : bookData[selectedCategory]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}

export default Category_Screens

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
})