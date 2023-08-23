import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import BottomNavigationBar from './BottomNavigationBar';

const RegisterScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <View style={styles.logosign}>
                    <Image source={require('../assets/images/Add-User.png')} style={styles.logoImage} />
                </View>
                <Text style={styles.subtitle}>Sign Up</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.required}>* Required fields</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Company Name<Text style={styles.requiredRed}>*</Text></Text>
                    <TextInput style={styles.input} placeholder="Company Name" />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>First Name<Text style={styles.requiredRed}>*</Text></Text>
                    <TextInput style={styles.input} placeholder="First Name" />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Last Name<Text style={styles.requiredRed}>*</Text></Text>
                    <TextInput style={styles.input} placeholder="Last Name" />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Account Representative<Text style={styles.requiredRed}>*</Text></Text>
                    <TextInput style={styles.input} placeholder="Account Representative" />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Brand Name Manufactured<Text style={styles.requiredRed}>*</Text></Text>
                    <TextInput style={styles.input} placeholder="Brand Name Manufactured*" />
                </View>

                <View style={styles.checkboxContainer}>
                    <Text style={styles.checkboxLabel}>I agree to the Terms and Conditions</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={openModal}>
                    <Text style={styles.buttonText}>Request Access</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.requestAccess}>By signing up, you agree to our Terms and Conditions.</Text>
            
            <BottomNavigationBar />
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Request Submitted </Text>
                        <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                            <Text style={styles.modalButtonText}>Close </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 28,
        left: "-150%",
        top: "-10%",
    },
    form: {
        width: '100%',
    },
    required: {
        color: 'black',
        marginBottom: 10,
    },
    requiredRed: {
        color: 'red',
    },
    inputGroup: {
        marginBottom: 10,
    },
    label: {
        color: 'black',
        marginBottom: 5,
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxLabel: {
        fontSize: 12,
    },
    button: {
        backgroundColor: '#2c3e50',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    requestAccess: {
        marginTop: 20,
        fontSize: 12,
    },
    logosign: {
        width: 50,
        height: 50,
        borderRadius: 20,
        overflow: 'hidden',
        top: "-10%",
        left: "-210%",
        borderWidth: 2,
        borderColor: "black",
    },
    logoImage: {
        width: '50%',
        height: '50%',
        resizeMode: 'cover',
        top: 10,
        left: 13,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#2c3e50',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default RegisterScreen;
