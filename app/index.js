import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Home = () => {
  const handleGetStarted = () => {
    // Handle the action when the "Get Started" button is pressed
    console.log("Get Started button pressed");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.welcome1}>Browse, connect and discover kingenic offerings and resources</Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.normalText}>
        Some normal text below the button
      </Text>
    </View>
  );
};

export default Home;
