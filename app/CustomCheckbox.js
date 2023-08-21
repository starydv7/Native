import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const CustomCheckbox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.checkbox, checked && styles.checked]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius:20,
  },
  checked: {
    backgroundColor: 'green',
  },
});

export default CustomCheckbox;
