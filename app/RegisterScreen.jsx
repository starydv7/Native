import React from 'react';
import { View, Text, StyleSheet, TextInput, CheckBox, TouchableOpacity, ScrollView } from 'react-native';

const RegisterScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
            <View style={styles.logosign}>
                    <Image source={require('../assets/images/add-user.png')} style={styles.logoImage} />
                </View>
                
                <Text style={styles.subtitle}>Sign Up </Text>
            </View>
            
            <View style={styles.form}>
                <Text style={styles.required}>* Required fields</Text>
                
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Company Name*</Text>
                    <TextInput style={styles.input} placeholder="Company Name" />
                </View>
                
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>First Name*</Text>
                    <TextInput style={styles.input} placeholder="First Name" />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Last Name*</Text>
                    <TextInput style={styles.input} placeholder="Last Name" />
                </View>
                
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Account Representative *</Text>
                    <TextInput style={styles.input} placeholder="Account Representative" />
                </View>
                
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Brand Name Manufactured*</Text>
                    <TextInput style={styles.input} placeholder="Brand Name Manufactured*"  />
                </View>
                
                <View style={styles.checkboxContainer}>
                    {/* <CheckBox style={styles.checkbox} /> */}
                    <Text style={styles.checkboxLabel}>I agree to the Terms and Conditions</Text>
                </View>
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Request Access</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.requestAccess}>By signing up, you agree to our Terms and Conditions.</Text>
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
    logo: {
        fontSize: 14,
        fontWeight: 'bold',
        left:"-250%",
        top:"-10%",
    },
    subtitle: {
        fontSize: 28,
        left:"-150%",
        top:"-10%",
    },
    form: {
        width: '100%',
    },
    required: {
        color: 'red',
        marginBottom: 10,
    },
    inputGroup: {
        marginBottom: 10,
    },
    label: {
        color: 'red',
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
    checkbox: {
        marginRight: 10,
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
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
    },
    logoImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default RegisterScreen;
