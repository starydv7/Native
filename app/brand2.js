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
  card1:{
    width:"100%",
    height:201,
    top:50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
    marginVertical: 15,
    borderRadius:20,
    marginBottom:10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContainer: {
    marginTop: 10,
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom:130,
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width:169,
    height:203,
    top:70,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
    marginVertical: 15,
    borderRadius:12,
    padding:24,
    gap:16,
  },
  imgcard:{
width:148,
height:137,
borderRadius:12,
backgroundColor:"#DEDEDE",
  },
  cardImage: {
    width: 148,
    height: 137,
    resizeMode: 'cover',
    marginBottom: 30,
  },
  picture:{
    width:117,
    height:98,
    top:70,
    left:10,
  },
  protext:{
    width:90,
    height:11,
    fontWeight:500,
    fontSize:9,
    color:"#666666",
    left:20,
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
