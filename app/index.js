import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const Home = () => {
  const handleGetStarted = () => {
    // Handle the action when the "Get Started" button is pressed
    console.log("Get Started button pressed");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.logo}>
        <Image source={require('../assets/images/biglogo.png')} style={styles.logoImage} />
      </View>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.welcome1}>Browse, connect and discover kingenic offerings and resources</Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.normalText}>
        Some normal text below the button
      </Text>
      <View style={styles.bottomTextRow}>
        <Text style={styles.bottomLeftText}>Kingenic Privacy Notice </Text>
        <Text style={styles.bottomRightText}>Corporate website </Text>
      </View>
    </View>
  );
};

export default Home;
