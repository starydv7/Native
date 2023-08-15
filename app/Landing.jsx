import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./landing";

const Landing = () => {
  const navigation = useNavigation();

  const handleNavigateBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={styles.topmost}>
      <Text style={styles.hello}>Hello !</Text>
      <Text style={styles.hello1}>
      What would you like to explore today?

      </Text>
      <View style={styles.cardContainer}>
        <View style={styles.card} />
        <View style={styles.card} />
        <View style={styles.card} />
      </View>
    </View>
  );
};

export default Landing;
