import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

import firestore from '_config/database';
import * as colors from '_config/colors'

class TripDetails extends Component {

  state = {
    trip: null,
    isLoading: true,
    mapType: 'standard'
  }

  handleErrorPage = () => {
    this.props.navigator.push({
      screen: 'ErrorPage',
      navigatorStyle: {
        tabBarHidden: true,
      }
    });
  }

  showMapModal = () => {
    this.props.navigator.showModal({
      screen: 'MapDetails',
      title: 'infos',
      navigatorStyle: {
        navBarHidden: true,
      },
      passProps: {
        trip: this.state.trip
      },
      animationType: 'slide-up'
    })
  }

  goBack = () => {
    this.props.navigator.pop({
      animated: true, // does the pop have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
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
    const { isLoading, trip, mapType } = this.state;

    if (isLoading) {
      return [
        <ActivityIndicator key={0} size="large" color={colors.orange} />
      ]
    }

    return [
      <View key={1} style={styles.container}>
        <MapView style={styles.map}
          mapType={mapType}
          showsMyLocationButton={true}
          showsUserLocation={true}
          showsIndoors={true}
          showsCompass={true}
          loadingEnabled={true}
          zoomEnabled={true}
          // onPress={e => {
          //   alert("onPress");
          // }}
          onMarkerPress={e => {
            this.showMapModal();
          }}
          initialRegion={{
            latitude: 34.0132500,
            longitude: -6.8325500,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}>
          {trip.locations.map((location, i) => (
            <MapView.Marker
              key={i}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
            // image={require('_images/icons/map/marker.png')}
            >
              <CustomMarker />
            </MapView.Marker>
          ))}
        </MapView>
        <TouchableOpacity style={{
            position: 'absolute',
            top: 10,
            left: 15,
          }} onPress={e => {
            this.goBack();
        }}>
          <Icon name='ios-arrow-round-back-outline' size={45} color={colors.dark} />
        </TouchableOpacity>
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

const CustomMarker = () => {
  return (
    <TouchableOpacity>
      <Icon name={'md-pin'} size={50} color={colors.orange} />
    </TouchableOpacity>
  )
}

export default TripDetails;
