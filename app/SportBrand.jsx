//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// create a component
const SportBrand = () => {
    const brandNames = [
        'Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5',
        'Brand 6', 'Brand 7', 'Brand 8', 'Brand 9', 'Brand 10'
      ];
    return (
        <View style={styles.container}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.brandListContainer}
        >
          {brandNames.map((brand, index) => (
            <View key={index} style={styles.brandItem}>
              <Text style={styles.brandText}>{brand}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
      brandListContainer: {
        alignItems: 'center',
      },
      brandItem: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 100,
      },
      brandText: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
      },
});

//make this component available to the app
export default SportBrand;
