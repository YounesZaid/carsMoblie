import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as colors from '_config/colors';

class TripItem extends Component {
  render() {
    const { trip } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={.6}
        onPress={e => alert(`${trip.name}`)} >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          width: '100%',
          borderRadius: 8,
          backgroundColor: colors.grey,
          marginBottom: 6,
        }}>
          <View>
            <Text style={styles.textStyle}>Driver Name : {trip.name}</Text>
            <Text style={styles.textStyle}>Car Type : {trip.car}</Text>
            <Text style={styles.textStyle}>Started at : {trip.posted}</Text>
          </View>
          <Text style={styles.textStyle}>Active</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default TripItem;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: '300',
    color: colors.blue_text
  }
});

