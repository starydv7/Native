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
import CustomCheckbox from './CustomCheckbox';
import { useFonts } from 'expo-font';
// create a component
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const navigation = useNavigation();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Home")
  //     }
  //   })

  //   return unsubscribe
  // }, [])
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView  style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}>
      <View style={styles.container}>
        <View style={styles.maindiv}>
          <Text style={styles.welcome}> Sign up </Text>
          <Text style={styles.welcome2}> create an account to get started </Text>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
           <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder=" Create Password"
            secureTextEntry
          />
           <TextInput
            style={styles.input}
            placeholder=" Confirm Password"
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
            <View style={styles.checkboxContainer}>
            
      <CustomCheckbox checked={isChecked} onPress={toggleCheckbox} />
            <Text style={styles.checkboxLabel}>
              I agree to the Privacy Policy and Terms
            </Text>
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
    height: 700,
    borderWidth: 2, // Border width in pixels
    borderColor: "red", // Border color
    padding: 20,
    backgroundColor: "white",
    gap: 20,
    borderRadius: 10,
  },
  welcome: {
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: 900,
     fontFamily: 'Inter', // Apply the Inter font here
  },
  welcome2:{
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: 400,
    top:-15,
    fontFamily: 'Inter', // Apply the Inter font here
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
    marginTop: 20,
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
    fontFamily: 'Inter',
    
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
  },
  label:{
    top:20,
    left:5,
    fontSize:12,
    
    
  },
  checkboxContainer:{
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel:{
    flexDirection:"row",
  }
});

//make this component available to the app
export default Signup;
