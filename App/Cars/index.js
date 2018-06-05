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
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
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
        this.showFilterBox();
      }
    }
  }

  showFilterBox = () => {
    this.props.navigator.showLightBox({
      screen: "FilterBox", // unique ID registered with Navigation.registerScreen
      passProps: {
        onFilter: (filter) => {
          alert(filter)
        }
      }, // simple serializable object that will pass as props to the lightbox (optional)
      style: {
        backgroundBlur: "dark", // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
        backgroundColor: "rgba(0, 0, 0, 0.4)", // tint color for the background, you can specify alpha here (optional)
        tapBackgroundToDismiss: true // dismisses LightBox on background taps (optional)
      },
      adjustSoftInput: "nothing", // android only, adjust soft input, modes: 'nothing', 'pan', 'resize', 'unspecified' (optional, default 'unspecified')
     });
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
