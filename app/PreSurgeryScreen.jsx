import React, { useState } from 'react';
import { View, Text,
   StyleSheet, 
   SafeAreaView,
   TouchableOpacity, 
   Image,
   ScrollView 
} from 'react-native';

const PreSurgeryScreen = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/images/york.png")}
                style={styles.image1}
              />
              <View style={styles.arrowImage}>
                <Image
                  source={require("../assets/images/arrow.png")}
                  style={styles.image2}
                />
              </View>
            </View>
            <View style={styles.container2}>
              <Text style={styles.container2Title}>Pre-Surgery </Text>
              <View style={styles.titleContainer}>
            <Text style={styles.starIcon}>★</Text>
            <Text style={styles.titleText}>Brand : Wûne </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              Aspen is as close as one can get to a storybook alpine town in America. 
              The choose-your-own-adventure possibilities—skiing, hiking, dining, shopping, and more.
            </Text>
            {!showMore && (
              <TouchableOpacity onPress={toggleShowMore}>
                <Text style={styles.learnMore}>Learn More</Text>
              </TouchableOpacity>
            )}
            {showMore && (
              <>
                <Text style={styles.secondaryText}>
                  this text break into 3 lines and add learn more after click on learn more remaining part of text open and each line start with equal starting point.
                </Text>
                <TouchableOpacity onPress={toggleShowMore}>
                  <Text style={styles.learnMore}>Read Less</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
            </View>
            
            <View style={styles.container3}>
              <Text style={styles.indicationText}>Indications </Text>
              <View style={styles.cardMain}>
              <View style={styles.cardContainer}>
                <View style={styles.card}>
                <Image
                  source={require("../assets/images/heater.png")}
                  style={styles.heaterImage}
                />
                <Text style={styles.heaterText}>Heater </Text>
                </View>
              </View>
              <View style={styles.cardContainer}>
                <View style={styles.card}>
                <Image
                  source={require("../assets/images/heater4.png")}
                  style={styles.heaterImage}
                />
                <Text style={styles.heaterText}>Dinner </Text>
                </View>
              </View>
              <View style={styles.cardContainer}>
                <View style={styles.card}>
                <Image
                  source={require("../assets/images/heater3.png")}
                  style={styles.heaterImage}
                />
                <Text style={styles.heaterText}>1 Tub </Text>
                </View>
              </View>
              <View style={styles.cardContainer}>
                <View style={styles.card}>
                <Image
                  source={require("../assets/images/heater2.png")}
                  style={styles.heaterImage}
                />
                <Text style={styles.heaterText}>Pool </Text>
                </View>
              </View>
            </View>
            <View style={styles.container4}>
               <View style={styles.container4Text}>
               <Text style={styles.labelClaim}>Label Claim </Text>
               </View>   
            </View>
            </View>
            
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'grey',
    borderWidth: 2,
    borderColor: 'red',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    width: '98%',
    height: '70%',
    resizeMode: 'contain',
    top: -55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowImage: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: '-70%',
    left: '-40%',
  },
  image2: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    top: '1%',
  },
  container2:{
    borderWidth:2,
    borderColor:"white",
    width:"100%",
    height:144.98,
    justifyContent:"center",
    alignItems:"center",
    top: '-22%',
  },
  container2Title:{
    color:"black",
    fontSize:24,
    lineHeight:29.05,
    fontWeight:600,
    top:"20%",
    left:"-30%",
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    top:"3%",
    left:"-100%",
  },
  starIcon: {
    fontSize: 12,
    color: '#DF9652',
    marginRight: 5,
  },
  titleText: {
    fontSize: 12,
  },
  textContainer: {
    padding: 20,
  },
  mainText: {
    fontSize: 10,
  },
  secondaryText: {
    fontSize: 10,
    marginTop: 0,
  },
  learnMore: {
    color: 'blue',
    marginTop: 10,
  },
  container3: {
    borderWidth: 2,
    borderColor: "white",
    width: "100%",
    height:"auto",
    justifyContent: "center",
    alignItems: "center",
    top: '-20%',
  
  },
  cardMain:{
    gap:14,
    
    justifyContent: 'space-between', // Equal space between cards
  flexDirection: 'row', // Arrange cards horizontally
  alignItems: 'center', // Align cards vertically in the center
  },
  cardContainer: {
    width: 72,
    height: 68,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 10, // Adjust this value as needed
  },
  heaterText:{
   fontSize:10,
   color:"#B8B8B8",
  },
  indicationText:{
    fontSize:18,
    fontWeight:600,
    color:"#232323",
    left:"-35%",
    top:"-5%",
    marginBottom:"5%",

  },
  container4:{
    width:"100%",
    height:20,
    borderWidth:2,
    borderColor:"red",
    marginTop:10,
    marginBottom:10,
  },
  container4Text:{
    width:"100%",
    overflow:"hidden",
    height:23,
    borderWidth:2,
    borderColor:"white",
    top:"5%",

  },
  labelClaim:{
    fontSize:14,
    fontWeight:600,
    left:"3%",
    top:"10%",
  },
  container4Image:{
    width:"100%",
   
    height:777,
    borderWidth:2,
    left:10,
    borderColor:'green',
    borderRadius:10,
    marginBottom:10,

  },
  york3:{
    width:"98%",
    height:"100%",
    
  },
  
});

export default PreSurgeryScreen;
