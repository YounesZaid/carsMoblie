import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Our custom component we want as a button in the nav bar
const CustomButton = ({ text }) =>
  <TouchableOpacity
    style={[styles.button, { backgroundColor: 'tomato' }]}
    onPress={() => alert('pressed me!')}
  >
    <Icon name='ios-search' size={20} color='tomato'/>
  </TouchableOpacity>;

export default CustomButton;
