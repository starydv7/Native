import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topmost: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Adding a background color for the page
  },
  hello: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    top: 55,
    left: 20, // Adjusting the left margin for better positioning
  },
  hello1: {
    marginTop: 140, // Using marginTop instead of top
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
    paddingBottom:90,
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
    borderRadius:10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
   
    top:10,
  },
  cat1:{
    fontSize:24,
    fontWeight:700,
    lineHeight:23.8,
    top:0,
    textAlign:"left",
    marginLeft:-90,
    marginTop: 10,
  },
  cat2:{
    fontSize:24,
    fontWeight:700,
    lineHeight:21.8,
    top:15,
    marginLeft:-140,
    marginTop:10,
  },
  
  catText:{
    fontSize:14,
    fontWeight:700,
    lineHeight:21.8,
    top:15,
    textAlign:"left",
    marginLeft:3,
  },
  catText1:{
    fontSize:14,
    fontWeight:700,
    lineHeight:21.8,
    top:10,
    left:10,
  }


});

export default styles;
