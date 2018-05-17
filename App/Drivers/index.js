import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import DriverItem from './DriverItem';
import * as colors from '_config/colors';

export default class DriversScreen extends Component {

  state = {
    drivers: [],
    isLoading: true
  }

  componentDidMount() {
    this.setState({
      drivers: _GetItems(),
      isLoading: false
    })
  }

  render() {
    const { drivers, isLoading } = this.state;

    if (isLoading || drivers.length === 0) {
      return [
        <View key={0} style={styles.emptyContainer}>
          {isLoading && <ActivityIndicator size="large" color={colors.orange} />}
          {!isLoading && <Image source={require('_images/icons/empty/empty.png')} style={styles.emptyImage}/>}
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