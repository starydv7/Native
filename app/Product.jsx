import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./product";
import BottomNavigationBar from "./BottomNavigationBar";
import { Video } from "expo-av";
const Product = () => {
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});
  const navigation = useNavigation();
  const [showMore, setShowMore] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const handleProduct = () => {
    navigation.navigate("BrandPage");//navigate to brand page
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleSearch = () => {
    // Handle the search action based on the searchText
    console.log("Search Text:", searchText);
  };

  return (
    <View style={styles.topmost}>
      <Text style={styles.hello1}>
        Are you looking for a market ready branded product for distribution or a
        product on your own brand name ?
      </Text>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/images/Vector.png")}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search products"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
      </View>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {/* Card 1 */}
        <View style={styles.card1}>
          
            <Image
              source={require('../assets/images/videoimage.png')}
              style={styles.cardImage1}
            />
        </View>

        {/* Card 2 */}
        <TouchableOpacity onPress={handleProduct}>
        <View style={styles.card}>
          <Image
            source={require("../assets/images/pro2.png")}
            style={styles.cardImage}
          />
          <Text style={styles.cat2}> Branded Portfolio </Text>
          <Text style={styles.catText}>
            {showMore
              ? "Kingenic continues to develop nutrition products that help people improve their health everyday.."
              : "Kingenic continues to develop nutrition products that help people improve their health everyday. We offer wide range of brands for a better tommorow."}
            {"\n"}
            {showMore && (
              <TouchableOpacity onPress={toggleShowMore}>
                <Text style={styles.seeMore}>See Less </Text>
              </TouchableOpacity>
            )}
            {!showMore && (
              <TouchableOpacity onPress={toggleShowMore}>
                <Text style={styles.seeMore}>See More </Text>
              </TouchableOpacity>
            )}
          </Text>
        </View>
        </TouchableOpacity>
        

        {/* Card 3 */}
        <View style={styles.card}>
          <Image
            source={require("../assets/images/pro3.png")}
            style={styles.cardImage}
          />
          <Text style={styles.cat3}> Private Label Products </Text>
          <Text style={styles.catText3}>
            {showMore
              ? "Kingenic continues to develop nutrition products that help people improve their health everyday.."
              :"With strong partnerships, we help you design your new or existing brand with innovative products and expand your business verticals"}
            {"\n"}
            {showMore && (
              <TouchableOpacity onPress={toggleShowMore}>
                <Text style={styles.seeMore}>See Less </Text>
              </TouchableOpacity>
            )}
            {!showMore && (
              <TouchableOpacity onPress={toggleShowMore}>
                <Text style={styles.seeMore}>See More </Text>
              </TouchableOpacity>
            )}
          </Text>
        </View>
      </ScrollView>
      <BottomNavigationBar />
    </View>
  );
};

export default Product;
