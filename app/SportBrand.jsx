//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
// create a component
const SportBrand = () => {
  const navigation = useNavigation();
  const brandNames = [
    { name: "Dairy Protein", screen: "DairyScreen" },
    { name: "Plant Protein", screen: "PlantProteinScreen" },
    { name: "Amino Acid", screen: "AminoAcidScreen" },
    { name: "Nutra", screen: "NutraScreen" },
    { name: "Brand 5", screen: "Brand5Screen" },
    { name: "Brand 6", screen: "Brand6Screen" },
    { name: "Brand 7", screen: "Brand7Screen" },
    { name: "Brand 8", screen: "Brand8Screen" },
    { name: "Brand 9", screen: "Brand9Screen" },
    { name: "Brand 10", screen: "Brand10Screen" },
  ];
  const cardData = [
    {
      title: "ULTRA WHEY PROTEIN",
      subtitle:
        "Active Ingredients: Milk Protein Concentrate, Whey Protein Concentrate, L-Glutamine",
      productType: "Drink Mix",
      packagingType: "Sachet, Jar, Flat Bottom Pouch, Stand Up Pouch, Bucket",
      explore: "Explore 1",
      labelClaim: "Label Claim 1",
      image: require("../assets/images/muscles.png"),
    },
    {
      title: "Card 2 Title",
      subtitle: "Card 2 Subtitle",
      productType: "Product 2 Type",
      packagingType: "Packaging 2 Type",
      explore: "Explore 2",
      labelClaim: "Label Claim 2",
    },
    // Add more card data objects as needed
  ];
  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.rowContainer}>
            <TouchableOpacity onPress={handleNavigateBack}>
              <Image
                source={require("../assets/images/arrow.png")}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <Text style={styles.portfolioText}>Sports Nutrition </Text>
          </View>
          <Text style={styles.text}>
            Slide through the sub-categories to find the right fit product for
            your fitness brand.{" "}
          </Text>
          <View style={styles.maincontent}></View>
          <View style={styles.scrollright}>
            <ScrollView
              horizontal
              contentContainerStyle={styles.brandListContainer}
            >
              {brandNames.map((brand, index) => (
                <TouchableHighlight
                  key={index}
                  style={styles.brandItem}
                  onPress={() => handleBrandPress(brand.screen)}
                >
                  <View>
                    <Text style={styles.brandText}> {brand.name} </Text>
                  </View>
                </TouchableHighlight>
              ))}
            </ScrollView>
          </View>

          <View style={styles.cardContainer}>
            {cardData.map((card, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
                <View style={styles.brandName}>
                  <View style={styles.musclesRow}>
                    <Image
                      source={require("../assets/images/muscles.png")}
                      style={styles.musclesIcon}
                    />
                    <Text style={styles.musclesText}>
                      Muscles {"\n"}Recovery
                    </Text>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.musclesRow}>
                    <Image
                      source={require("../assets/images/muscles.png")}
                      style={styles.musclesIcon}
                    />
                    <Text style={styles.musclesText}>
                      Muscles {"\n"}Recovery
                    </Text>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.musclesRow}>
                    <Image
                      source={require("../assets/images/muscles.png")}
                      style={styles.musclesIcon}
                    />
                    <Text style={styles.musclesText}>
                      Muscles {"\n"}Recovery
                    </Text>
                  </View>
                </View>
                <Text style={styles.cardText}>
                  Product Type : {card.productType}
                </Text>
                <Text style={styles.cardText}>
                  <Text style={styles.boldText}>Packaging Type:</Text>{" "}
                  {card.packagingType}
                </Text>
                <Text style={styles.cardText}>{card.explore}</Text>
                <Text style={styles.cardText}>{card.labelClaim}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
    marginHorizontal: 14,
  },
  brandText: {
    marginLeft: 20,
    fontSize: 14,
    fontWeight: 400,
    left: -25,
    color: "#8E00FD",
  },
  brandListContainer: {
    left: 1,
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
    justifyContent: "center",
    marginLeft: "25%",
  },

  text: {
    marginLeft: 20,
    fontSize: 14,
    opacity: 0.5,
    textAlign: "center",
    top: 30,
  },
  cat: {
    marginTop: 40,
    left: 20,
    fontWeight: 600,
    fontSize: 20,
    letterSpacing: 1,
  },
  scrollright: {
    top: "10%",
    left: 20,
  },
  cardContainer: {
    marginTop: "40%",
    alignItems: "center",
    marginHorizontal: 14,
  },

  card: {
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    top: 0,
    justifyContent: "space-between",
    marginBottom: 20, // Add margin to create a gap between cards
    transform: [{ scaleY: 1 }], // Flip the card vertically
    // ... (other card styles)
    // Added box shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: "flex-end",
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 700,
  },

  cardSubtitle: {
    fontSize: 8,
    opacity: 0.6,
  },

  cardText: {
    fontSize: 8,
    marginTop: 5,
  },
  brandName: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    width: 2,
    height: "100%",
    backgroundColor: "black",
    marginLeft: 10,
    marginRight: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  muscles: {
    fontSize: 10,
    fontWeight: 500,
  },
  musclesRow: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  musclesIcon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  musclesText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  boldText: {
    fontSize:8,
    fontWeight: 700,
  },
});

//make this component available to the app
export default SportBrand;
