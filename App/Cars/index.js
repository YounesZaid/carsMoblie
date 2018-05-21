import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';


import * as colors from '_config/colors';
import CarItem from './CarItem';

class CarsScreen extends Component {

  state = {
    cars: [],
    isLoading: true
  }

  componentDidMount() {
    this.setState({
      cars: _GetCars(),
      isLoading: false
    })
  }

  render() {
    const { cars, isLoading } = this.state;
    if (isLoading || cars.length === 0) {
      return [
        <View key={0} style={{
          flex: 1,
          justifyContent: 'center',
        }}>
          {isLoading && <ActivityIndicator size='large' color={colors.orange}/>}
          {!isLoading && <Image source={require('_images/icons/empty/empty.png')} style={{
            alignSelf: 'center'
          }}/>}
        </View>
      ]
    }
    return [
      <ScrollView key={1} contentContainerStyle={{
        backgroundColor: "#efefef",
        padding: 7,
      }}>
        {cars.map((item, index) => (
          <CarItem key={index} car={item} navigator={this.props.navigator} />
        ))}
      </ScrollView>
    ]
  }
}

_GetCars = () => {
  return (
    cars = [
      { model: 'Model-s', name: 'Tesla', posted: '03/03/2018' },
      { model: 'Model-s', name: 'Tesla', posted: '03/03/2018' },
      { model: 'Model-s', name: 'Tesla', posted: '03/03/2018' },
      { model: 'Model-s', name: 'Tesla', posted: '03/03/2018' },
      { model: 'Model-s', name: 'Tesla', posted: '03/03/2018' },
      { model: 'Model-s', name: 'Tesla', posted: '03/03/2018' },
      { model: 'Model-s', name: 'Tesla', posted: '03/03/2018' },
      { model: 'Model-s', name: 'Tesla', posted: '03/03/2018' },
      { model: 'Model-s', name: 'Tesla', posted: '03/03/2018' },
      { model: 'Model-s', name: 'Tesla', posted: '03/03/2018' },
      { model: 'Model-s', name: 'Tesla', posted: '03/03/2018' },
    ]
  )
}

export default CarsScreen;
