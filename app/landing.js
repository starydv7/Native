import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topmost: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Adding a background color for the page
  },
  hello: {
    fontSize: 94,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    top: 35,
    left: 20, // Adjusting the left margin for better positioning
  },
  hello1: {
    marginTop: 150, // Using marginTop instead of top
    width: 320,
    height: 74,
    fontSize: 24,
    lineHeight: 30, // Correcting the property name to lineHeight
    // textAlign: 'center', // Center aligning the text
    marginLeft:-25,
    textAlign:"left"
  },
  cardContainer: {
    marginTop: 10,
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    width:343,
    height:350,
    top:20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
    marginVertical: 15,
  },


});

export default styles;
