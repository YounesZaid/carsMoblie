import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '_config/colors';

const window = Dimensions.get('window');

class MapDetails extends Component {
  render() {
    const { trip } = this.props;

    return (
      <ImageBackground source={require('_images/background/background.png')} style={{
        flex: 1,
        width: window.width,
        height: window.height,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          marginBottom: 30
        }}>
          <View style={styles.infoContainer}>
            <Icon name='md-person' size={35} style={styles.iconStyle}/>
            <Text style={[styles.textStyle, {marginRight: 5}]}>{trip.driverFirstName}</Text>
            <Text style={styles.textStyle}>{trip.driverLastName}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Icon name='ios-call' size={35} style={styles.iconStyle}/>
            <Text style={styles.textStyle}>{trip.driverPhoneNumber}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Icon name='ios-car' size={35} style={styles.iconStyle}/>
            <Text style={styles.textStyle}>{trip.carName}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Icon name='md-calendar' size={35} style={styles.iconStyle}/>
            <Text style={styles.textStyle}>{trip.postedTripAt}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Icon name='ios-alert-outline' size={35} style={styles.iconStyle}/>
            <Text style={styles.textStyle}>Active for now</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={.8} style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E8774E',
          width: 250,
          borderRadius: 2,
          // marginBottom: 10,
          padding: 12,
        }} onPress={() => {alert('car Off');}}>
          <Text style={{
            color: '#FFFFFF',
            fontSize: 14,
            fontWeight: '500',
          }}>Stop car</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
            position: 'absolute',
            top: 10,
            left: 15,
          }} onPress={e => {
          this.props.navigator.dismissModal();
        }}>
          <Icon name='md-close' size={40} color={colors.dark} />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconStyle: {
    marginRight: 20,
    color: '#C9C9C9'
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.grey_dark
  }
})

export default MapDetails;
