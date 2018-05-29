import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');

class RemoteScreen extends Component {

  static navigatorButtons = {
    rightButtons: [
      {
        icon: require('_images/nav-icons/filter.png'),
        id: 'filter' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
      }
    ]
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
        alert('NavBar', 'Edit button pressed');
      }
      if (event.id == 'filter') {
        alert('NavBar');
      }
    }
  }
  render() {
    return (
      <View>
        
      </View>
    );
  }
}


export default RemoteScreen;
