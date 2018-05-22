import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';


import firestore from '_config/database';
import * as colors from '_config/colors';
import CarItem from './CarItem';

class CarsScreen extends Component {

  state = {
    cars: [],
    isLoading: true
  }

  handleErrorPage = () => {
    this.props.navigator.push({
      screen: 'ErrorPage',
      navigatorStyle: {
        tabBarHidden: true,
      }
    });
  }

  componentDidMount() {
    firestore.collection("cars").orderBy('postedCarAt', 'desc').onSnapshot((QuerySnapshot) => {
      const carItems = [];
      QuerySnapshot.forEach((doc) => {
        const data = doc.data();
        let docItem = {
          carName: data.carName,
          carMatricule: data.carMatricule,
          carType: data.carType,
          carPlaces: data.carPlaces,
          postedCarAt: data.postedCarAt,
          carId: doc.id
        }
        carItems.push(docItem);
      });
      this.setState({
        cars: carItems,
        isLoading: false
      })
    });
  }

  render() {
    const { cars, isLoading } = this.state;
    if (isLoading || cars.length === 0) {
      return [
        <View key={0} style={{
          flex: 1,
          justifyContent: 'center',
        }}>
          {isLoading && <ActivityIndicator size='large' color={colors.orange} />}
          {!isLoading && <Image source={require('_images/icons/empty/empty.png')} style={{
            alignSelf: 'center'
          }} />}
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
