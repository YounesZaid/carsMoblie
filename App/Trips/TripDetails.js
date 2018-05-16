import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


class TripDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Map here </Text>
        <Text>yes</Text>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 34.0132500,
            longitude: -6.8325500,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}>
          <MapView.Marker
            coordinate={{
              latitude: 34.0132500,
              longitude: -6.8325500,
            }}
            title={'marker title'}
            description={'marker description'}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default TripDetails;
