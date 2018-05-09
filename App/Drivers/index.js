import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '_config/colors';

export default class DriversScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image style={styles.imageStyle} source={require('_images/img.jpg')}/>
        <View style={styles.elementContainer}>
          <View>
            <Text> Driver Name</Text>
            <Text> Matricule</Text>
          </View>
          <Icon name="ios-arrow-forward-outline" size={50} color={colors.dark}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.grey,
    marginBottom: 6,
  },
  imageStyle: {
    // width: '40%',
    // height: '40%',
    resizeMode: 'contain',
    borderRadius: 80
  },
  elementContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})