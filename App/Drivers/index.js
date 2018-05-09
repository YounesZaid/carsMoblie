import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import * as colors from '_config/colors';

export default class DriversScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Image style={styles.imageStyle} source={require('_images/img.jpg')}/>
        <View>
          <Text> Driver Name</Text>
          <Text> Matricule</Text>
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
  }
})