//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Icon } from 'react-native-vector-icons/icon';

// create a component
const PrivateScreen = () => {
    
const cardData = [
    { title: 'Card 1 Title', subtitle: 'Subtitle for Card 1' },
    { title: 'Card 2 Title', subtitle: 'Subtitle for Card 2' },
    { title: 'Card 3 Title', subtitle: 'Subtitle for Card 3' },
    { title: 'Card 4 Title', subtitle: 'Subtitle for Card 4' },
    { title: 'Card 5 Title', subtitle: 'Subtitle for Card 5' },
  ];
    return (
        <View style={styles.container}>
            <View style={styles.maincontainer}>
            <View style={styles.rowContainer}>
          <Image
            source={require("../assets/images/arrow.png")}
            style={styles.searchIcon}
          />
          <Text style={styles.portfolioText}>Product Portfolio</Text>
        </View>
        <Text style={styles.text}>Why wait ! Start your brand today </Text>
           <View style={styles.maincontent}>
            <Text style={styles.cat}>
                Categories
            </Text>
           </View>
           {cardData.map((card, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
            <View style={styles.cardRow}>
              <Text>Learn More</Text>
              <Icon name="arrowright" size={18} color="#000" />
            </View>
          </View>
        ))}
            </View>
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
    maincontainer:{
        width:"100%",
        height:"80%",
        backgroundColor:"white",

    },
    rowContainer: {
        flexDirection: 'row', // Display children in a row layout
        alignItems: 'center', // Center items vertically
        padding: 20,
      },
      searchIcon: {
        width: 10,
        height: 20,
        marginRight: 10, // Space between Image and Text
      },
      portfolioText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:"center",
      },
      text:{
        marginLeft:20,
        fontSize:14,
        opacity:0.5,
        textAlign:"center",
      },
      cat:{
        marginTop:20,
        left:20,
        fontWeight:600,
        fontSize:20,
        letterSpacing:1
      }
});

//make this component available to the app
export default PrivateScreen;
