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
import styles from "./brand";
import Video from "react-native-video";
import BottomNavigationBar from "./BottomNavigationBar";

const Brand = () => {
  const navigation = useNavigation();
  const [showMore, setShowMore] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const handleProduct = () => {
    navigation.navigate("product");
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
      Which brand would you like to explore today?
      </Text>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/images/Vector.png")}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Brands"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="#999"
        />
      </View>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {/* Card 1 */}
        <TouchableOpacity onPress={handleProduct}>
        <View style={styles.card}>
        <Image
            source={require('../assets/images/product1.png')} 
            style={styles.cardImage}
          />
          <Text style={styles.cat1}>Product Catalogue </Text>
          <Text style={styles.catText}>
            Explore our branded portfolio and private label offerings
          </Text>
        </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <View style={styles.card}>
        <Image
            source={require('../assets/images/cat1.png')} 
            style={styles.cardImage}
          />
          <Text style={styles.cat2}>Customer Portal</Text>
          <Text style={styles.catText}>
             Retrieve product documents and request support service
          </Text>
          {/* <Text>Card 2</Text> */}
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
        <Image
            source={require('../assets/images/cat2.png')} 
            style={styles.cardImage}
          />
          <Text style={styles.cat2}> Learning Center </Text>
          <Text style={styles.catText1}>
            Find out about the latest research, and how nutrition can help you stay healthy
          </Text>
          {/* <Text>Card 3</Text> */}
        </View>
      </ScrollView>
     
      <BottomNavigationBar/>
    </View>
  );
};

export default Brand;
