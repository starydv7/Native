import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Animated 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./brand2";
import Video from "react-native-video";
import BottomNavigationBar from "./BottomNavigationBar";
import { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
const BrandScreen = () => {
  const navigation = useNavigation();
  const [showMore, setShowMore] = useState(false);
  const [searchText, setSearchText] = useState("");

  

//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//     { useNativeDriver: false }
//   );

//   const opacity = scrollY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [1, 0],
//     extrapolate: 'clamp',
//   });

  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  const handleProduct = () => {
    navigation.navigate("BrandScreen");
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleSearch = () => {
    // Handle the search action based on the searchText
    console.log("Search Text:", searchText);
  };
  const cardsData = [
    { id: 1, title: 'Pre-Surgery', image: require('../assets/images/pro2.png') },
    { id: 2, title: 'Surgery Support', image: require('../assets/images/pro2.png') },
    { id: 3, title: 'Optimum Healing', image: require('../assets/images/pro2.png') },
    { id: 4, title: 'Tissue Synthesis', image: require('../assets/images/pro2.png') },
    { id: 5, title: 'Peptic Healing', image: require('../assets/images/pro2.png') },
  ];
  const renderCards = () => {
    const rows = [];
    for (let i = 0; i < cardsData.length; i += 2) {
      rows.push(
        <View style={styles.row} key={i}>
          {renderCard(cardsData[i])}
          {i + 1 < cardsData.length && renderCard(cardsData[i + 1])}
        </View>
      );
    }
    return rows;
  };
  const renderCard = (card) => (
    <View style={styles.card} key={card.id}>
        <View style={styles.imgcard}>
        {/* <Image source={card.image} style={styles.cardImage} /> */}
        </View>
      
      <Text style={styles.cardTitle}>{card.title}</Text>
    </View>
  );
  
  return (
    <View style={styles.topmost}>
     
     
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {/* Card 1 */} 
        
        {/* Your scrollable content */}
      
        <View style={styles.card1}>
          
          <Image
            source={require('../assets/images/videoimage.png')}
            style={styles.cardImage1}
          />
      </View>
          {renderCards()}
      </ScrollView>

     
      <BottomNavigationBar/>
    </View>
  );
};

export default BrandScreen;
