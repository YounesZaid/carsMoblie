import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import DriverItem from './DriverItem';

export default class DriversScreen extends Component {
  state = {
    drivers: _GetItems()
  }
  render() {
    return (
      <ScrollView >
        {drivers.map((item, i) => {
          return <DriverItem key={i} driver={item} />
        })}
      </ScrollView>
    );
  }
}

_GetItems = () => {
  return (
    drivers = [
      { name: 'driver01', registrationNumber: 'driver-01', posted: '03/03/2018' },
      { name: 'driver02', registrationNumber: 'driver-02', posted: '03/03/2018' },
      { name: 'driver03', registrationNumber: 'driver-03', posted: '03/03/2018' },
      { name: 'driver04', registrationNumber: 'driver-04', posted: '03/03/2018' },
      { name: 'driver05', registrationNumber: 'driver-05', posted: '03/03/2018' },
      { name: 'driver06', registrationNumber: 'driver-06', posted: '03/03/2018' },
    ]
  )
}