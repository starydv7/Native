//import liraries
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// create a component
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const handleSignup = () => {
    navigation.navigate("Signup");
    //navigate to signup page
  };
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Home")
  //     }
  //   })

  //   return unsubscribe
  // }, [])
  // const handleSignUp = () => {
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Registered with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  // }

  // const handleLogin = () => {
  //   auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Logged in with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  // }

  return (
    <KeyboardAvoidingView  style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}>
      <View style={styles.container}>
        <View style={styles.maindiv}>
          <Text style={styles.welcome}> Welcome! </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <View style={styles.forgot}>
            <Text style={styles.forgotText}>Forgot Password? </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              // onPress={handleLogin}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
          // onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          
        </TouchableOpacity> */}
            <View style={styles.registerContainer}>
              <Text style={styles.register}>Not a Memeber? </Text>
              <TouchableOpacity onPress={handleSignup}>
              <Text style={styles.registerText}> Register </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* <Text>Login </Text> */}
      </View>
    </KeyboardAvoidingView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
    color: "#fff",
  },
  maindiv: {
    top: 15,
    width: 375,
    height: 500,
    borderWidth: 2, // Border width in pixels
    borderColor: "red", // Border color
    padding: 20,
    backgroundColor: "white",
    gap: 20,
    borderRadius: 10,
  },
  welcome: {
    fontSize: 29.04,
    letterSpacing: 1,
    fontWeight: 900,
  },
  input: {
    width: 327,
    height: 48,
    gap: 18,
    borderWidth: 1,
    borderColor: "#C5C6CC",
    borderRadius: 12,
    top: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
    flex: 1,
  },
  forgot: {
    width: 327,
    fontSize: 12,
  },
  forgotText: {
    color: "#006FFD",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    left:10,
  },
  register: {
    flex: 1,
  },
  registerText:{
    color:"#0782F9",
    fontSize:16,
    fontWeight:700,
    flex:1,
    left:-60,
  }
});

//make this component available to the app
export default Login;
