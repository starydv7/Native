import React from 'react';
import { View, Text, Button, ScrollView,Image ,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./landing";
import BottomNavigationBar from './BottomNavigationBar';

const Landing = () => {
  // const navigation = useNavigation();
  const navigation = useNavigation();
  const handleProduct = () => {
    // Handle the action when the "Get Started" button is pressed
    navigation.navigate('Product');
    console.log("Get Started button pressed");
  };
  // const handleNavigateBack = () => {
  //   navigation.goBack(); // Go back to the previous screen
  // };
  const handleCustomer=()=>{
    navigation.navigate("Login");
  }

  return (
    <View style={styles.topmost}>
      <Text style={styles.hello}>Hello !</Text>
      <Text style={styles.hello1}>
      What would you like to {'\n'}explore today?

      </Text>
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
        <TouchableOpacity onPress={handleCustomer}>
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
        </TouchableOpacity>

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

export default Landing;
