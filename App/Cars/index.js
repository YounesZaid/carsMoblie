import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';


import * as colors from '_config/colors';
import CarItem from './CarItem';

class CarsScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{
        backgroundColor: "#efefef",
        padding: 7,
      }}>
        {Array.from({ length: 10 }, (k, i) => i).map(index => (
          <CarItem key={index} navigator={this.props.navigator} />
        ))}
      </ScrollView>
    );
  }
}

export default CarsScreen;
