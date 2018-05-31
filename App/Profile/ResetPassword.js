import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '_config/colors'

const auth = firebase.auth();

class ResetPassword extends Component {

  state = {
    email: ''
  }

  resetPassword = (email) => {
    auth.sendPasswordResetEmail(email).then(function () {
      // Email sent.
      alert('an email has been sent to you with password reset instructions');
    }).catch((error) => {
      // An error happened.
      alert('Error : '+error)
    });
  }

  render() {
    const { email } = this.state;

    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
      }}>
        <Icon name='ios-lock-outline' size={60} color={colors.orange} />
        <View style={{
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '600',
            color: colors.dark,
            marginTop: 40,
            marginBottom: 5,
          }}>Forgot Password ?</Text>
          <Text style={{
            fontSize: 16,
            fontWeight: '100',
            color: '#9C9B9B',
            marginBottom: 30,
            textAlign: 'center'
          }}> Enter your email address here to receive further instructions </Text>
        </View>
        <TextInput placeholder='Your email here' keyboardType='email-address'
          style={{
            fontSize: 15,
            backgroundColor: '#f5f5f5',
            // backgroundColor: colors.orange,
            width: 250,
            height: 50,
            borderRadius: 3,
            marginBottom: 30,
            paddingLeft: 12,
            paddingRight: 12,
          }} underlineColorAndroid={'transparent'}
          autoCapitalize='none'
          onChangeText={(value) => {
            this.setState({
              email: value
            })
          }}
          value={email} />
        <TouchableOpacity activeOpacity={.8} style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E8774E',
          width: 250,
          borderRadius: 2,
          // marginBottom: 10,
          padding: 12,
        }} onPress={() => {
          this.resetPassword(email);
          this.setState({
            email: ''
          })
        }}>
          <Text style={{
            color: '#FFFFFF',
            fontSize: 14,
            fontWeight: '500',
          }}>RESET PASSWORD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          position: 'absolute',
          top: 10,
          left: 15,
        }} onPress={e => {
          this.props.navigator.dismissModal();
        }}>
          <Icon name='md-close' size={35} color={colors.dark} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ResetPassword;
