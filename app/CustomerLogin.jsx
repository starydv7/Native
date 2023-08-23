import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const CustomerLogin = () => {
  const [generatedOtp, setGeneratedOtp] = useState(generateRandomOtp());
  const [userOtp, setUserOtp] = useState(["", "", "", "", "", ""]);
  const [isValidOtp, setIsValidOtp] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const otpInputs = useRef([]);

  function generateRandomOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  function handleOtpChange(index, value) {
    const updatedOtp = [...userOtp];
    updatedOtp[index] = value;
    setUserOtp(updatedOtp);

    if (index < otpInputs.current.length - 1 && value) {
      otpInputs.current[index + 1].focus();
    }
  }

  function handleVerifyOtp() {
    const enteredOtp = userOtp.join("");
    setIsValidOtp(enteredOtp === generatedOtp);
    setModalVisible(true);
  }
  function handleKeyPress(index, e) {
    const digit = e.nativeEvent.key;
    if (/[0-9]/.test(digit) && index < otpInputs.current.length - 1) {
      const updatedOtp = [...userOtp];
      updatedOtp[index] = digit;
      setUserOtp(updatedOtp);
      otpInputs.current[index + 1].focus();
    } else if (digit === "Backspace" && index > 0) {
      const updatedOtp = [...userOtp];
      updatedOtp[index] = "";
      setUserOtp(updatedOtp);
      otpInputs.current[index - 1].focus();
    }
  }
  function handleContinue() {
    if (isValidOtp) {
     // Get the navigation object
      navigation.navigate("RegisterScreen"); // Replace 'RegisterScreen' with your actual screen name
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Welcome!</Text>
      <Text style={styles.pageSubtitle}>
        Our private label supplement customer portal makes it easy to get the
        information and technical documentation related to your brand
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Enter permanent access code</Text>
        <Text style={styles.generatedOtp}>Generated OTP: {generatedOtp}</Text>
        <View style={styles.otpContainer}>
          {userOtp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (otpInputs.current[index] = ref)}
              style={[
                styles.otpInput,
                { borderColor: digit ? "#000" : "#ccc" },
              ]}
              value={digit}
              onChangeText={(value) => handleOtpChange(index, value)}
              onKeyPress={(e) => handleKeyPress(index, e)}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>
        <Text style={styles.forgotText}>Forgot permanent access code?</Text>
        <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
          <Text style={styles.verifyButtonText}>Verify OTP</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                {isValidOtp
                  ? "OTP is correct! "
                  : "Incorrect OTP. Please try again. "}
              </Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(false);
                  if (isValidOtp) {
                    handleContinue();
                  }
                }}
              >
                <Text style={styles.modalButtonText}> Close </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  pageTitle: {
    fontSize: 34,
    fontWeight: 900,
    marginBottom: 10,
    top: "-22%",
    left: "-25%",
  },
  pageSubtitle: {
    fontSize: 13,
    marginTop: 10, // Add margin to the top
    marginLeft: "5%", // Use marginLeft instead of top and left for better alignment
    marginRight: "5%", // Add some right margin for better spacing
    textAlign: "center", // Center-align the text
    top: "-23%",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 5,
  },
  verifyButton: {
    backgroundColor: "#0080FF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  verifyButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#0080FF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  forgotText: {
    fontSize: 12,
    color: "#6F00FD",
    textAlign: "center",
  },
});

export default CustomerLogin;
