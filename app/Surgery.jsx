import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView,Image,TouchableOpacity } from 'react-native';

const Surgery = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.box1}>
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
            <View style={styles.box2}>
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
            <View style={styles.box3}></View>
            <View style={styles.box4}></View>
            <View style={styles.box5}></View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    box1: {
        height: 500,
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 10,
        borderWidth:2,
        borderColor:"red",
    },
    box2: {
        height: 500,
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 10,
        borderWidth:2,
        borderColor:"red",
    },
    box3: {
        height: 500,
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 10,
        borderWidth:2,
        borderColor:"red",
    },
    box4: {
        height: 500,
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 10,
        borderWidth:2,
        borderColor:"red",
    },
    box5: {
        height: 500,
        width: '100%',
        backgroundColor: 'white',
        marginBottom: 10,
        borderWidth:2,
        borderColor:"red",
    },
      image1: {
        width: '100%',
        height:"100%",
        resizeMode: 'contain',
        
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode:"contain",
      },
      arrowImage: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        top: '-85%',
        left: '5%',
      },
     
      indicationText:{
        fontSize:18,
        fontWeight:600,
        color:"#232323",
        left:"5%",
        top:"5%",
        marginBottom:"5%",
    
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
});

export default Surgery;
