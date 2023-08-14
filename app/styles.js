import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4287f5",
    padding: 15,
    borderRadius: 8,
    width:350,
    marginBottom: 60,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign:"center",
   
  },
  normalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom:-300,
  },
  welcome:{
    fontSize:34,
    color:"black",
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:-50,

  },
  welcome1:{
    fontSize:16,
    color:"black",
    fontWeight:400,
    textAlign:"center",
    padding:50,
    marginBottom:-30,

  }
  ,
  bottomTextRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 20,
  },
  bottomLeftText: {
    fontSize: 10,
    textAlign: "left",
  },
  bottomRightText: {
    fontSize: 10,
    textAlign: "right",
  },
});

export default styles;
