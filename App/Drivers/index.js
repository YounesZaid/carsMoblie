import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import DriverItem from './DriverItem';
import * as colors  from '_config/colors';

export default class DriversScreen extends Component {
  state = {
    drivers: _GetItems()
  }
  render() {
    return (
      <ScrollView 
        contentContainerStyle={{
          backgroundColor: "#efefef",
          padding: 7,
          // paddingTop: 10,
        }}>
        {drivers.map((item, i) => {
          return <DriverItem key={i} driver={item} navigator={this.props.navigator}/>
        })}
      </ScrollView>
    );
  }
}

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