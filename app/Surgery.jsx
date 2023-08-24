import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import BottomNavigationBar from "./BottomNavigationBar";

const Surgery = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const Card = ({ title, subtitle, imageSource }) => {
    return (
      <View style={styles.card2}>
        <Image source={imageSource} style={styles.imageBox2} />
        <Text style={styles.title2}>{title}</Text>
        <Text style={styles.subtitle2}>{subtitle}</Text>
      </View>
    );
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
        <Text style={styles.container2Title}>Surgery </Text>
        <View style={styles.titleContainer}>
          <Text style={styles.starIcon}>★</Text>
          <Text style={styles.titleText}>Brand : Wûne </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>
            Aspen is as close as one can get to a storybook alpine town in
            America. The choose-your-own-adventure possibilities—skiing, hiking,
            dining, shopping, and more.
          </Text>
          {!showMore && (
            <TouchableOpacity onPress={toggleShowMore}>
              <Text style={styles.learnMore}>Learn More</Text>
            </TouchableOpacity>
          )}
          {showMore && (
            <>
              <Text style={styles.secondaryText}>
                this text break into 3 lines and add learn more after click on
                learn more remaining part of text open and each line start with
                equal starting point.
              </Text>
              <TouchableOpacity onPress={toggleShowMore}>
                <Text style={styles.learnMore}>Read Less</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      <View style={styles.box3}>
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
      </View>
      <View style={styles.box4}>
        <View style={styles.container4Text}>
          <Text style={styles.labelClaim}>Label Claim </Text>
        </View>
        <Image
          source={require("../assets/images/york3.png")}
          style={styles.york3}
        />
      </View>
      <View style={styles.box5}>
        <Text style={styles.textIngredient}>Ingredients </Text>
        <Text style={styles.textIngredient1}>
          Whey Protein Isolate, Whey Protein Concentrate, Maltodextrin, Citric
          Acid, Natural Flavours, Natural Colours
        </Text>
        <Text style={styles.textIngredient2}>Flavours Available </Text>
        <Text style={styles.textIngredient3}>Strawberry </Text>
        <Text style={styles.textIngredient4}>Pack Size </Text>
        <Text style={styles.textIngredient5}>200gm (6 Sachet)</Text>
        <Text style={styles.textIngredient6}>Direction of Use: </Text>
        <ScrollView horizontal contentContainerStyle={styles.container2}>
          <Card
            title="Card 1"
            subtitle="Subtitle 1"
            // imageSource={require('./images/image1.jpg')}
          />
          <Card
            title="Card 2"
            subtitle="Subtitle 2"
            // imageSource={require('./images/image2.jpg')}
          />
          <Card
            title="Card 3"
            subtitle="Subtitle 3"
            // imageSource={require('./images/image3.jpg')}
          />
          <Card
            title="Card 4"
            subtitle="Subtitle 4"
            // imageSource={require('./images/image4.jpg')}
          />
        </ScrollView>
      </View>
      <View style={styles.box7}>
        <Text style={styles.box7Text1}>Storage </Text>
        <Text style={styles.box7Text2}>Store in cool dry place </Text>
        <Text style={styles.box7Text1}>Contraindications </Text>
        <Text style={styles.box7Text2}>Not suitable for vegetarians </Text>
        <Text style={styles.box7Text1}>Precaution </Text>
        <Text style={styles.box7Text2}>
          Must be used under medical supervision{" "}
        </Text>
        <Text style={styles.box7Text1}>Shelf Life </Text>
        <Text style={styles.box7Text2}>18 Months </Text>
        <Text style={styles.box7Text1}>Order Code </Text>
        <Text style={styles.box7Text2}>
          Wûne Pre-Surgery (Powder) Sachet : 391-8968{" "}
        </Text>
        <Text style={styles.box7Text2}>
          Wûne Pre-Surgery (Powder) Tin : 391-8968{" "}
        </Text>
        <Text style={styles.box7Text1}>Important Notice </Text>
        <Text style={styles.box7Text2}>Not for medicinal use </Text>
      </View>
      <BottomNavigationBar/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  box1: {
    height: 500,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 10,
    borderWidth: 2,
    borderColor:"transparent"
  },
  box2: {
    height: 200,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 10,
    borderWidth: 2,
    borderColor:"transparent",
  },
  box3: {
    height: 200,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 10,
    borderWidth: 2,
    borderColor:"transparent",
  },
  box4: {
    height: 880,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 10,
    borderWidth: 2,
    borderColor:"transparent",
  },
  box5: {
    height: 400,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 10,
    borderWidth: 2,
    borderColor:"transparent",
  },
  box7: {
    height: 400,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 10,
    borderWidth: 2,
    borderColor:"transparent",
  },
  image1: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",

    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  arrowImage: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    top: "-85%",
    left: "5%",
  },
  box7Text1: {
    fontSize: 18,
    fontWeight: 600,
    color: "#232323",
    top:40,
    left:20,
  },
  box7Text2: {
    fontSize: 14,
    fontWeight: 400,
    color: "#232323",
    top:40,
    left:20,
  },

  indicationText: {
    fontSize: 18,
    fontWeight: 600,
    color: "#232323",
    left: "5%",
    top: "5%",
    marginBottom: "5%",
  },
  image2: {
    width: "50%",
    height: "50%",
    resizeMode: "contain",
    top: "1%",
  },
  container2: {
    borderWidth: 2,
    borderColor:"transparent",
    width: "100%",
    height: 144.98,
    justifyContent: "center",
    alignItems: "center",
    top: "-22%",
  },
  container2Title: {
    color: "black",
    fontSize: 24,
    lineHeight: 29.05,
    fontWeight: 600,
    top: "5%",
    left: "5%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    top: "3%",
    left: "4%",
  },
  starIcon: {
    fontSize: 12,
    color: "#DF9652",
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
    color: "blue",
    marginTop: 10,
  },
  cardMain: {
    gap: -10,
    top: 20,
    justifyContent: "space-between", // Equal space between cards
    flexDirection: "row", // Arrange cards horizontally
    alignItems: "center", // Align cards vertically in the center
  },
  cardContainer: {
    width: 72,
    height: 68,
    left: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor:"transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  container4Text: {
    top: "-1%",
    left: "3%",
    marginBottom: "1%",
    marginTop: "5%",
  },
  york3: {
    marginTop: "5%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    left: "1%",
    borderRadius: 10,
  },
  textIngredient: {
    left: "5%",
    fontSize: 18,
    fontWeight: 600,
    top: 10,
  },
  textIngredient1: {
    left: "5%",
    fontSize: 14,
    fontWeight: 400,
    marginRight: "10%",
    top: 20,
  },
  textIngredient2: {
    left: "5%",
    fontSize: 18,
    fontWeight: 600,
    top: 30,
  },
  textIngredient3: {
    left: "5%",
    fontSize: 14,
    fontWeight: 400,
    top: 30,
  },
  textIngredient4: {
    left: "5%",
    fontSize: 18,
    fontWeight: 600,
    top: 30,
  },
  textIngredient5: {
    left: "5%",
    fontSize: 14,
    fontWeight: 400,
    top: 30,
  },
  textIngredient6: {
    left: "5%",
    fontSize: 18,
    fontWeight: 600,
    top: 50,
  },
  container2: {
    flexDirection: "row",
    padding: 10,
    margintop: "10%",
  },
  card2: {
    width: 126,
    height: 111,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor:"transparent",
    alignItems: "center",
    justifyContent: "center",
    margintop: "30%",
    top: 60,
    borderRadius: 10,
  },
  imageBox2: {
    width: 47,
    height: 47,
  },
  title2: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  subtitle2: {
    fontSize: 10,
    color: "gray",
  },
});

export default Surgery;
