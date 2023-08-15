import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
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
      What would you like to {'\n'}explore today?

      </Text>
      <ScrollView style={styles.CardScrollContainer}>
        <View style={styles.cardContainer}>
          {/* Card 1 */}
          <View style={styles.card}>
            <Text>Card 135</Text>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <Text>Card 2</Text>
          </View>

          {/* Card 3 */}
          <View style={styles.card}>
            <Text>Card 3</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Landing;
