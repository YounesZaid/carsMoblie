import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ElevatedView from "fiber-react-native-elevated-view";

import * as colors from '_config/colors';

class TripItem extends Component {
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
            <Icon name='ios-contact-outline' size={30} color={colors.orange} />
            <Text style={styles.textStyle}>{trip.name}</Text>
          </View>
          <View style={styles.infosContainer}>
            <Icon name='ios-car-outline' size={30} />
            <Text style={styles.textStyle}>{trip.carName}</Text>
          </View>
          <View style={styles.infosContainer}>
            <Icon name='ios-calendar-outline' size={30} />
            <Text style={styles.textStyle}>{trip.posted}</Text>
          </View>
          <View style={styles.infosBottom}>
            <Text>Active</Text>
            <TouchableOpacity
              activeOpacity={.6}
              onPress={e => alert(`${trip.name}`)} >
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
    marginBottom: 5,
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
    fontWeight: '400',
    marginLeft: 20
  },
  infosBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#efefef',
  }
});

