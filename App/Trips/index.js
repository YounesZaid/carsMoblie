import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';

// import * as colors from '_config/colors'
import TripItem from './TripItem';

export default class TripsScreen extends Component {

  state = {
    trips: _GetItems()
  }
  render() {
    return (
      <ScrollView >
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

_GetItems = () => {
  return (
    trips = [
      { name: 'driver1', car: 'car-1', posted: '03/03/2018' },
      { name: 'driver2', car: 'car-1', posted: '03/03/2018' },
      { name: 'driver3', car: 'car-1', posted: '03/03/2018' },
      { name: 'driver4', car: 'car-1', posted: '03/03/2018' },
      { name: 'driver5', car: 'car-1', posted: '03/03/2018' },
      { name: 'driver6', car: 'car-1', posted: '03/03/2018' },
      { name: 'driver7', car: 'car-1', posted: '03/03/2018' },
      { name: 'driver8', car: 'car-1', posted: '03/03/2018' },
      { name: 'driver9', car: 'car-1', posted: '03/03/2018' },
      { name: 'driver10', car: 'car-1', posted: '03/03/2018' },
      { name: 'driver11', car: 'car-1', posted: '03/03/2018' }
    ]
  )
}