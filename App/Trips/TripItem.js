import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '_config/colors';

class TripItem extends Component {
  render() {
    const { trip } = this.props;
    return (
      // <TouchableOpacity
      //   activeOpacity={.6}
      //   onPress={e => alert(`${trip.name}`)} >
        <View style={styles.container}>
          <View style={styles.infosContainer}>
            <Icon name='ios-contact-outline' size={30} color={colors.orange}/>
            <Text style={styles.textStyle}>{trip.name}</Text>
          </View>
          <View style={styles.infosContainer}>
            <Icon name='ios-car-outline' size={30}/>
            <Text style={styles.textStyle}>{trip.carName}</Text>
          </View>
          <View style={styles.infosContainer}>
            <Icon name='ios-calendar-outline' size={30}/>
            <Text style={styles.textStyle}>{trip.posted}</Text>
          </View>
        </View>
    );
  }
}

export default TripItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // alignItems: 'center',
    padding: 15,
    width: '100%',
    borderRadius: 3,
    backgroundColor: '#ffffff',
    marginBottom: 6,
  },
  infosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 5,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 20
  }
});

{/* <Icon name={'ios-pin-outline'} size={40} style={styles.mapIcon}/>
          <View>
            <Text style={styles.textStyle}>{trip.name}</Text>
            <Text style={styles.textStyle}>{trip.carName}</Text>
            <Text style={styles.textStyle}>{trip.posted}</Text>
          </View>
          <View style={styles.isActiveStyle}>
            <Text >Active</Text>
            <Button 
              onPress={() => {alert('clicked')}}
              title="Locate Me"
              color={colors.orange}
            />
          </View> */}
