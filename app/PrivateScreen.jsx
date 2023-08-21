//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView ,TouchableHighlight} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
// create a component
const PrivateScreen = () => {
  const navigation = useNavigation();
  const cardData = [
    { title: "Card 1 Title", subtitle: "Subtitle for Card 1",screenName: "SportBrand" },
    { title: "Card 2 Title", subtitle: "Subtitle for Card 2",screenName: "SportBrand" },
    { title: "Card 3 Title", subtitle: "Subtitle for Card 3",screenName: "SportBrand" },
    { title: "Card 4 Title", subtitle: "Subtitle for Card 4",screenName: "SportBrand" },
    { title: "Card 5 Title", subtitle: "Subtitle for Card 5",screenName: "SportBrand" },
    { title: "Card 5 Title", subtitle: "Subtitle for Card 5",screenName: "SportBrand" },
    { title: "Card 5 Title", subtitle: "Subtitle for Card 5",screenName: "SportBrand" },
  ];
  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };
  return (
    <View style={styles.container}>
      <View style={styles.maincontainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={handleNavigateBack}>
          <Image
            source={require("../assets/images/arrow.png")}
            style={styles.searchIcon}
          />
          </TouchableOpacity>
          <Text style={styles.portfolioText}>Product Portfolio</Text>
        </View>
        <Text style={styles.text}>Why wait ! Start your brand today </Text>
        <View style={styles.maincontent}>
          <Text style={styles.cat}>Categories</Text>
        </View>
        <ScrollView style={styles.cardContainer}>
          {cardData.map((card, index) => (
            <TouchableOpacity
            key={index}
           
            onPress={() => navigation.navigate(card.screenName)}
          >
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
              <View style={styles.cardRow}>
                <Image
                  source={require("../assets/images/caretright.png")}
                  style={styles.arrowRight}
                />
              </View>
            </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  maincontainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  rowContainer: {
    flexDirection: "row", // Display children in a row layout
    alignItems: "center", // Center items vertically
    padding: 20,
    top: 30,
  },
  searchIcon: {
    width: 10,
    height: 20,
    marginRight: 10, // Space between Image and Text
  },
  portfolioText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent:"center",
    marginLeft:"25%"
  },
  text: {
    marginLeft: 20,
    fontSize: 14,
    opacity: 0.5,
    textAlign: "center",
    top: 20,
  },
  cat: {
    marginTop: 40,
    left: 20,
    fontWeight: 600,
    fontSize: 20,
    letterSpacing: 1,
  },
  card: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    marginBottom: 20,
    top: 20,
    width:"90%",
    alignItems:"center",
    justifyContent:"center",
    alignContent:"center",
    shadowColor: "#000",
    marginLeft:20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft:-170,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
    marginLeft:"-45%",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowRight:{
    width: 10,
    height: 20,
    marginRight: 10, // Space between Image and Text
    marginLeft:"80%",
    marginTop:"-25%",
  },
 

});

//make this component available to the app
export default PrivateScreen;
