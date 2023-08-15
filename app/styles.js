import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 273,
    height: 273,
    marginBottom: 10,
    backgroundColor:"#FBFBFBB2",
  },
  logoImage: {
    width: 355,
    height: 123,
    top:26,
    left:-50,
    right:20,
    justifyContent:"center",
    alignItems:"center",
    
  },
  welcome: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
    top:10,
    width:195,
    height:39,
    textAlign:"center",
  },
  welcome1: {
    fontSize: 16,
    marginBottom: 20,
    padding: 30,
    top:20, 
    fontWeight: 400,
    lineHeight: 17.1,
    textAlign: "center",
    marginLeft: 'auto',   // Add this property
    marginRight: 'auto',  // Add this property
  },
  button: {
    backgroundColor: "#8600EF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width:340,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign:"center",
    fontSize: 18,
  },
  normalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  bottomTextRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 15,
  },
  bottomLeftText: {
    fontSize: 10,
    textAlign: "left",
    color:"#000000CC",
    lineHeight:11.4,
  },
  bottomRightText: {
    fontSize: 10,
    textAlign: "right",
    color:"#000000CC",
    lineHeight:11.4,
  },
});

export default styles;
