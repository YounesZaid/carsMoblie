import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';

import * as colors from '_config/colors';

const window = Dimensions.get('window');
const auth = firebase.auth();

class SigninScreen extends Component {

  state = {
    email: 'zaidyounes94@gmail.com',
    password: 'root123',
    errorEmail: '',
    errorPassword:'',
    isSignedIn: false
  }

  signIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then(() => {
      // alert('Signed in');
      console.ignoredYellowBox = ['Setting a timer'];
    })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
      });
  }

  showForgotPassdModal = () => {
    this.props.navigator.showModal({
      screen: 'ResetPasswordModal',
      title: 'passReset',
      navigatorStyle: {
        navBarHidden: true,
      },
      animationType: 'slide-up'
    })
  }

  render() {
    const { email, password, isSignedIn} = this.state;
    return (
      <ImageBackground source={require('_images/background/background.png')} style={{
        width: window.width,
        height: window.height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image source={require('_images/logo/pin.png')} style={{
          marginTop: -50,
          marginBottom: 30,
        }} />
        {!isSignedIn && <View style={{
          marginTop: 20
        }}>
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
            }} underlineColorAndroid={'transparent'}
            onChangeText={(value) => {
              this.setState({
                email: value
              })
            }}
            value={email}
            autoCapitalize='none' />
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
            }} underlineColorAndroid={'transparent'}
            onChangeText={(value) => {
              this.setState({
                password: value
              });
            }}
            value={password}
            autoCapitalize='none' />
          <TouchableOpacity activeOpacity={.8} style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E8774E',
            width: 250,
            borderRadius: 2,
            // marginBottom: 10,
            padding: 12,
          }} onPress={() => {
            // alert('Sign in' + email + '' + password);
            this.signIn(email, password);
            this.setState({
              email: '',
              password: '',
              isSignedIn: true
            })
          }}>
            <Text style={{
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: '500',
            }}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.5} style={{
            marginTop: 10,
          }} onPress={() => {
            this.showForgotPassdModal();
            alert('an email has been sent to you with password reset instructions')
          }}>
            <Text style={{
              fontSize: 14,
              fontWeight: '400',
              color: colors.blue_text,
              textAlign: 'center'
            }}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>}
        {isSignedIn && <ActivityIndicator size='large' style={{ marginTop: 90 }} />}
      </ImageBackground>
    );
  }
}

export default SigninScreen;

