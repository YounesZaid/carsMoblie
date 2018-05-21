import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator
} from 'react-native';

import * as colors from '_config/colors';

class SplashScreen extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('_images/logo/position.png')} style={{
          marginBottom: 30
        }}/>
        <ActivityIndicator size='large' color='#F4BFAC'/>
      </View>
    );
  }
}

export default SplashScreen;
