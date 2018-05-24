import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ActivityIndicator
} from 'react-native';

import * as colors from '_config/colors';

class SplashScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('_images/background/splash-background.png')} style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('_images/logo/pin.png')} style={{
          marginBottom: 30
        }}/>
        <ActivityIndicator size='large' color='#fff'/>
      </ImageBackground>
    );
  }
}

export default SplashScreen;
