import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import * as colors from '_config/colors';

const window = Dimensions.get('window');

class SigninScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('_images/background/background.png')} style={{
        width: window.width,
        height: window.height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('_images/logo/position.png')} style={{
          marginTop: -90,
          marginBottom: 50,
        }} />
        <TextInput placeholder='email' keyboardType='email-address'
          style={{
            fontSize: 14,
            backgroundColor: '#f5f5f5',
            // backgroundColor: colors.orange,
            width: 250,
            height: 50,
            borderRadius: 3,
            marginBottom: 8,
            paddingLeft: 12,
            paddingRight: 12,
          }} underlineColorAndroid={'transparent'} />
        <TextInput placeholder='*******' keyboardType='default' secureTextEntry={true}
          style={{
            fontSize: 14,
            backgroundColor: '#f5f5f5',
            // backgroundColor: colors.orange,
            width: 250,
            height: 50,
            borderRadius: 3,
            marginBottom: 30,
            paddingLeft: 12,
            paddingRight: 12,
          }} underlineColorAndroid={'transparent'} />
        <TouchableOpacity activeOpacity={.8} style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E8774E',
          width: 250,
          borderRadius: 2,
          // marginBottom: 10,
          padding: 12,
        }} onPress={() => {alert('Sign in');}}>
          <Text style={{
            color: '#FFFFFF',
            fontSize: 14,
            fontWeight: '500',
          }}>SIGN IN</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

export default SigninScreen;
