import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ElevatedView from "fiber-react-native-elevated-view";

import * as colors from '_config/colors';

class TripItem extends Component {

  handlePushPage = () => {
    this.props.navigator.push({
      screen: 'TripDetails',
      title: 'Trip Details',
      passProps: {id: this.props.trip.id},
      navigatorStyle: {
        tabBarHidden: true,
        navBarHidden: true,
      },
      animated: true,
      animationType: 'slide-horizontal'
    });
  }

  render() {
    const { trip } = this.props;
    return (
      <ElevatedView
        style={{
          borderRadius: 2,
          backgroundColor: colors.white,
          marginBottom: 10,
        }}
        elevation={4}
        elevationColor={colors.dark}
        activeElevation={2}>
        <View style={styles.container}>
          <View style={styles.infosContainer}>
            <Icon name='ios-contact-outline' size={25} color={colors.orange} />
            <Text style={styles.textStyle}>{trip.driverFirstName}</Text>
            <Text style={{
              fontSize: 18,
              fontWeight: '500',
              marginLeft: 5
            }}>{trip.driverLastName}</Text>
          </View>
          <View style={styles.infosContainer}>
            <Icon name='md-car' size={25} />
            <Text style={styles.textStyle}>{trip.carName}</Text>
          </View>
          <View style={styles.infosContainer}>
            <Icon name='ios-calendar-outline' size={25} />
            <Text style={styles.textStyle}>{trip.postedTripAt}</Text>
          </View>
          <View style={styles.infosBottom}>
          {trip.isActive && <Text style={styles.availabilityStyle}>Active</Text>}
            <TouchableOpacity
              onPress={e => this.handlePushPage()} >
              <View style={{
                flexDirection: 'row',
              }}>
                <Text style={{
                  marginRight: 5,
                  fontSize: 16,
                }}>Track Me</Text>
                <Icon name='ios-map-outline' size={20} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ElevatedView>
    );
  }
}

export default TripItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 15,
    width: '100%',
  },
  infosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 7,
  },
  // infosContainerLast: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginLeft: 10,
  //   marginBottom: 5,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#efefef',
  // },
  textStyle: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 20
  },
  infosBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#efefef',
  },
  availabilityStyle: {
    color: '#9FDB9F',
    fontWeight: '400'
  }
});

