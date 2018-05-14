import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';

import * as colors from '_config/colors'
import TripItem from './TripItem';

export default class TripsScreen extends Component {

  state = {
    trips: _GetTrips()
  }
  render() {
    const { trips } = this.state;
    return (
      <ScrollView contentContainerStyle={{
        backgroundColor: "#efefef",
        padding: 7,
        // paddingTop: 10,
      }}>
        {trips.map((item, i) => {
          return <TripItem key={i} trip={item} />
        })}
      </ScrollView>
    );
  }
}
{/* <FlatList
    data={this.state.trips}
    keyExtractor={(item) => item.name}
    renderItem={({ item }) => <TripItem {...item} />}
/> */}

_GetTrips = () => {
  return (
    trips = [
      { name: 'Younes Zaid', carName: 'car-1', posted: '03/03/2018' },
      { name: 'driver2', carName: 'car-1', posted: '03/03/2018' },
      { name: 'driver3', carName: 'car-1', posted: '03/03/2018' },
      { name: 'driver4', carName: 'car-1', posted: '03/03/2018' },
      { name: 'driver5', carName: 'car-1', posted: '03/03/2018' },
      { name: 'driver6', carName: 'car-1', posted: '03/03/2018' },
      { name: 'driver7', carName: 'car-1', posted: '03/03/2018' },
      { name: 'driver8', carName: 'car-1', posted: '03/03/2018' },
      { name: 'driver9', carName: 'car-1', posted: '03/03/2018' },
      { name: 'driver10', carName: 'car-1', posted: '03/03/2018' },
      { name: 'driver11', carName: 'car-1', posted: '03/03/2018' }
    ]
  )
}