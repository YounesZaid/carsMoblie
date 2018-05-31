import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';

import * as colors from '_config/colors';

class SplashScreen extends Component {

  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       // User is signed in.
  //       alert('connected');
  //     } else {
  //       // User is signed out.
  //       alert('not connected');
  //     }
  //   });
  // }
  render() {
    return (
      <ImageBackground source={require('_images/background/splash-background.png')} style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('_images/logo/pin.png')} style={{
          marginBottom: 60,
        }}/>
        <ActivityIndicator size='large' />
      </ImageBackground>
    );
  }
}

export default SplashScreen;
