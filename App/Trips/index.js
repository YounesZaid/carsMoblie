import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import * as colors from '_config/colors'
import TripItem from './TripItem';

export default class TripsScreen extends Component {

  state = {
    trips: [],
    isLoading: true,
  }

  componentDidMount() {
    this.setState({
      trips: _GetTrips(),
      isLoading: false
    })
  }

  render() {
    const { trips, isLoading } = this.state;

    if (isLoading || trips.length === 0) {
      return [
        <View key={0} style={styles.emptyContainer} >
          {isLoading && <ActivityIndicator size="large" color={colors.orange} />}
          {!isLoading && <Image source={require('_images/icons/empty/empty.png')} style={styles.emptyImage} />}
        </View>
      ]
    }
    return [
      <ScrollView key={1} contentContainerStyle={{
        backgroundColor: "#efefef",
        padding: 7,
        // paddingTop: 10,
      }}>
        {trips.map((item, i) => {
          return <TripItem key={i} trip={item} navigator={this.props.navigator} />
        })}
      </ScrollView>

    ]
  }
}
{/* <FlatList
    data={this.state.trips}
    keyExtractor={(item) => item.name}
    renderItem={({ item }) => <TripItem {...item} />}
/> */}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyImage: {
    alignSelf: 'center',
  }
})

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