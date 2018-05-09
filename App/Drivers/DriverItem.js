import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '_config/colors';

class DriverItem extends Component {
  render() {
    const { driver } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={.6}
        onPress={e => alert(`${driver.name}`)}>
        <View style={styles.container}>
          <View style={styles.infosContainer}>
            <Image style={styles.imageStyle} source={require('_images/img.jpg')}/>
            {/* <Icon name="ios-contact" size={55} style={styles.imageStyle} /> */}
            <View>
              <Text style={styles.nameStyle}>{driver.name}</Text>
              <Text style={styles.registrationStyle}>{driver.registrationNumber}</Text>
            </View>
          </View>
          <Icon name="ios-arrow-forward-outline" size={40} color="#dbdbdb"/>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    width: '100%',
    borderRadius: 4,
    backgroundColor: colors.grey,
    marginBottom: 6,
  },
  imageStyle: {
    // height: '100%',
    width: 55, 
    height: 55,
    resizeMode: 'contain',
    marginRight: 20,
    borderRadius: 40,
    // color: colors.dark,
  },
  infosContainer: {
    flexDirection: 'row',
    margin: 0,
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.blue_text
  },
  registrationStyle: {
    fontSize: 16,
    fontWeight: '100',
    color: "#b1b9c6"
  }

})

export default DriverItem;
