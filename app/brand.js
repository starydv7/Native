import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topmost: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Adding a background color for the page
  },
 
  hello1: {
    marginTop: 70, // Using marginTop instead of top
    width: 320,
    height: 74,
    fontSize: 13,
    lineHeight: 30, // Correcting the property name to lineHeight
    // textAlign: 'center', // Center aligning the text
    marginLeft:50,
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
    height:392,
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
    marginBottom: 20,
  },
  cat1:{
    fontSize:18,
    fontWeight:700,
    lineHeight:18.8,
    top:-5,
    textAlign:"left",
    marginLeft:20,
  },
  catbrand:{
    fontSize:14,
    fontWeight:700,
    lineHeight:18.8,
    top:-5,
    textAlign:"left",
    marginLeft:20,
  },
  cat2:{
    fontSize:24,
    fontWeight:700,
    lineHeight:21.8,
    top:10,
    marginLeft:-140,
  },
  cardImage2:{
    width: '100%',
    height: "100%",
    resizeMode: 'cover',
    marginBottom: 0,
  },
  catText:{
    fontSize:12,
    fontWeight:700,
    lineHeight:21.8,
    top:0,
    textAlign:"left",
    marginLeft:3,
  },
  catText1:{
    fontSize:14,
    fontWeight:700,
    lineHeight:21.8,
    top:10,
    left:10,
  },
  searchContainer: {
    width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
  searchInput: {
    width:"85%",
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginRight: 5,
    borderRadius:35,
    fontSize:17,
    lineHeight:20.57,
    opacity: 0.5,
    textAlign:"center",
  },
  searchIcon:{
    position: 'absolute', // Position the icon absolutely
    left: 60, // Adjust left position to align the icon
    zIndex: 1, // Ensure the icon is above the input field
    width:18,
    height:18,
  }


});

export default styles;
