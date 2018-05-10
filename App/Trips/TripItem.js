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
          <Icon name={'ios-pin-outline'} size={40} style={styles.mapIcon}/>
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
          </View>
        </View>
    );
  }
}

export default TripItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // alignItems: 'center',
    padding: 15,
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.grey,
    marginBottom: 6,
  },
  mapIcon: {
    color: colors.orange,
    marginBottom: 8,
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
    color: colors.blue_dark
  },
  isActiveStyle: {
    // fontSize: 16,
    // textAlign: 'center',
    // fontWeight: '300',
    // color: colors.blue_text,
    // margin: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  locateButton: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
  }
});

