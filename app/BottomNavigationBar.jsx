import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './bottonstyle'; // Replace with your own styles

const BottomNavigationBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNavigationBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
        <Text style={styles.navBarItem}> Home </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Product')}>
        <Text style={styles.navBarItem}> Product </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BrandPage')}>
        <Text style={styles.navBarItem}> Brand </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BrandPage')}>
        <Text style={styles.navBarItem}> User </Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default BottomNavigationBar;
