import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, listenOrientationChange as lor, removeOrientationListener as rol } from 'react-native-responsive-screen';

const Welcome_Screens = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Chuyển sang màn hình khác sau 3 giây
      navigation.navigate('Category_Screens');
    }, 3000);

    // Clear timer khi component unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/logo.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Welcome to HaPonLa</Text>
    </View>
  );
};

export default Welcome_Screens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  logo: {
    height: hp('20%'),
    width: wp('35%'),
    marginBottom: hp('2%'),
    marginTop: hp('28%'),
    marginLeft: wp('2%'),
  },

  text: {
    fontSize: 25,
    color: '#9DDC2D',
    marginTop: hp('1%'),
    fontWeight: 'bold',
  },
});
