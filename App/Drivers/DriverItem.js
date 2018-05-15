import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ElevatedView from "fiber-react-native-elevated-view";

import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '_config/colors';

class DriverItem extends Component {
  
  handleShowDetailsPage = () => {
    this.props.navigator.push({
      screen: 'DriverDetails',
      title: 'Driver Details',
      passProps: {name: this.props.driver.name}
    });
  }
  render() {
    const { driver } = this.props;
    return (
      <ElevatedView
        style={styles.container}
        elevation={4}
        elevationColor={colors.dark}
        activeElevation={2}>
        <View style={{
          backgroundColor: colors.orange,
          borderRadius: 2,
          height: 50,
        }} />
        <Image source={require('_images/img.jpg')} style={styles.imageStyle}/>
        <View style={styles.infoContainer}>
          <Text style={{
            fontSize: 18,
            fontWeight: '600',
            color: colors.dark
          }}>{driver.name}</Text>
          <Text style={{
            fontSize: 16,
            fontWeight: '300',
            color: '#9C9B9B'
          }}>{driver.registrationNumber}</Text>
        </View>
        <TouchableOpacity
            activeOpacity={.6}
            onPress={() => this.handleShowDetailsPage()} >
            <Text style={styles.detailsStyle}> Show details ... </Text>
        </TouchableOpacity>

      </ElevatedView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    backgroundColor: colors.white,
    marginBottom: 10,
    flexDirection: 'column',
  },
  imageStyle: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    position: 'absolute',
    top: 15,
    borderRadius: 40,   
  },
  infoContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 12,
  },
  detailsStyle: {
    fontSize: 15,
    fontWeight: '400',
    padding: 10,
    alignSelf: 'center',
    borderTopWidth: 1,
    width: 300,
    textAlign: 'center',
    borderColor: '#efefef',
    color: colors.dark,
  }

})

export default DriverItem;
