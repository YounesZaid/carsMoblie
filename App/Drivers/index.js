import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import firestore from '_config/database';
import DriverItem from './DriverItem';
import * as colors from '_config/colors';

export default class DriversScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drivers: [],
      isLoading: true
    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  static navigatorButtons = {
    rightButtons: [
      {
        icon: require('_images/nav-icons/filter.png'), 
        id: 'filter' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
      }
    ]
  }

  onNavigatorEvent = (event) => { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
        alert('NavBar', 'Edit button pressed');
      }
      if (event.id == 'filter') {
        alert('NavBar', 'Add button pressed');
      }
    }
  }

  componentDidMount() {
    firestore.collection("drivers").orderBy('postedDriverAt', 'desc').onSnapshot((QuerySnapshot) => {
      const driverItems = [];
      const cardIdsDocPromises = [];
      QuerySnapshot.forEach((doc) => {
        const data = doc.data();
        const promise = firestore.collection("cards").doc(data.cardId).get();
        cardIdsDocPromises.push(promise);
        driverItems.push({
          driverFirstName: data.driverFirstName,
          driverLastName: data.driverLastName,
          driverRegistrationNumber: data.driverRegistrationNumber,
          driverPhoneNumber: data.driverPhoneNumber,
          driverHireDate: data.driverHireDate,
          postedDriverAt: data.postedDriverAt,
          cardId: data.cardId,
          driverId: doc.id
        });
      });

      Promise.all(cardIdsDocPromises).then(cardDocs => {
        cardDocs.forEach(cardDoc => {
          driverItems.forEach((driverObject, i) => {
            if (driverObject.cardId === cardDoc.id) {
              driverItems[i] = {
                ...driverObject,
                ...(cardDoc.data())
              }
            }
          })
        });
        this.setState({
          drivers: driverItems,
          isLoading: false
        })
      })
        .catch(error => {
          this.showErrorLoadingToast();
        })

    });
  }

  render() {
    const { drivers, isLoading } = this.state;

    if (isLoading || drivers.length === 0) {
      return [
        <View key={0} style={styles.emptyContainer}>
          {isLoading && <ActivityIndicator size="large" color={colors.orange} />}
          {!isLoading && <Image source={require('_images/icons/empty/empty.png')} style={styles.emptyImage} />}
        </View>
      ]
    }
    return [
      <ScrollView key={1}
        contentContainerStyle={{
          backgroundColor: "#efefef",
          padding: 7,
          // paddingTop: 10,
        }}>
        {drivers.map((item, i) => {
          return <DriverItem key={i} driver={item} navigator={this.props.navigator} />
        })}
      </ScrollView>
    ]
  }
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyImage: {
    alignSelf: 'center',
  }
})

_GetItems = () => {
  return (
    drivers = [
      { name: 'Younes Zaid', registrationNumber: 'registration-01', posted: '03/03/2018' },
      { name: 'Ossama Zaid', registrationNumber: 'registration-02', posted: '03/03/2018' },
      { name: 'Hmad Ben', registrationNumber: 'registration-03', posted: '03/03/2018' },
      { name: 'Driver Xname', registrationNumber: 'registration-04', posted: '03/03/2018' },
      { name: 'Souhail Xname', registrationNumber: 'registration-05', posted: '03/03/2018' },
      { name: 'Soukaina Zaid', registrationNumber: 'registration-06', posted: '03/03/2018' },
    ]
  )
}