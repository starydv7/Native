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
    top: 15,
    left: 20, // Adjusting the left margin for better positioning
  },
  hello1: {
    marginTop: -70, // Using marginTop instead of top
    width: 320,
    height: 74,
    fontSize: 24,
    lineHeight: 30, // Correcting the property name to lineHeight
    textAlign: 'center', // Center aligning the text
    marginLeft:10,
  },
  cardContainer: {
    marginTop: 40, // Adjusting the spacing between text and cards
    alignItems: 'center', // Centering the cards horizontally
  },
  card: {
    width: '80%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default styles;
