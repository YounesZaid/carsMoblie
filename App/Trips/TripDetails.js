import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import MapView from 'react-native-maps';

import firestore from '_config/database';
import * as colors from '_config/colors'

class TripDetails extends Component {

  state = {
    trip: null,
    isLoading: true
  }

  handleErrorPage = () => {
    this.props.navigator.push({
      screen: 'ErrorPage',
      navigatorStyle: {
        tabBarHidden: true,
      }
    });
  }

  componentDidMount() {
    firestore.collection("trips").doc(this.props.id).onSnapshot((doc) => {
      const driverAndCarPromises = [[], []];
      if (doc.exists) {
        const data = doc.data();
        const driverPromise = firestore.collection("drivers").doc(data.driverId).get();
        const carPromise = firestore.collection("cars").doc(data.carId).get();
        driverAndCarPromises[0].push(driverPromise);
        driverAndCarPromises[1].push(carPromise);
        const promise4All = Promise.all(driverAndCarPromises.map(Promise.all, Promise));
        promise4All
          .then(driversAndCars => {
            const driverDocs = driversAndCars[0];
            const carDocs = driversAndCars[1];
            driverDocs.forEach(driverDoc => {
              if (data.driverId === driverDoc.id) {
                carDocs.forEach(carDoc => {
                  if (data.carId === carDoc.id) {
                    this.setState({
                      trip: {
                        ...data,
                        ...(driverDoc.data()),
                        ...(carDoc.data())
                      },
                      isLoading: false
                    })
                  }
                });
              }
            });

          })
          .catch(error => {
            this.handleErrorPage();
          })
        // this.setState({
        //   trip: {
        //     driverId: data.driverId,
        //     carId: data.carId,
        //     id: doc.id,
        //     isActive: data.isActive,
        //     locations: data.locations,
        //     postedTripAt: data.postedTripAt
        //   },
        //   isLoading: false
        // })
      }
      else {
        // 1
        // this.setState({ trip: null, isLoading: false })
        // 2
        this.handleErrorPage();
      }
    });
  }

  render() {
    const { isLoading, trip} = this.state;

    if (isLoading) {
      return [
        <ActivityIndicator key={0} size="large" color={colors.orange} />
      ]
    }

    return [
      <View key={1} style={styles.container}>
        <Text> Map here </Text>
        <Text>yes</Text>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 34.0132500,
            longitude: -6.8325500,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}>
          {trip.locations.map((location, i) => {
            <MapView.Marker
              key={i}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={'marker title'}
              description={'marker description'}
            />
          })}
        </MapView>
      </View>
    ]
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
