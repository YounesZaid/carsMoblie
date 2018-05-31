import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '_config/colors'

const { width, height } = Dimensions.get('window');

class RemoteScreen extends Component {


  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      newPassword: '',
      hasError: false,
      messageError: 'error'
    }
  }

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Sign out', // for a textual button, provide the button title (label)
        id: 'signOut', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
        disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: false, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        buttonColor: colors.orange, // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      },
      // {
      //   icon: require('_images/nav-icons/filter.png'),
      //   id: 'filter' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
      // }
    ]
  };
  changePassword = (newPassword) => {
    var user = firebase.auth().currentUser;
    // var newPassword = getASecureRandomPassword();
    user.updatePassword(newPassword).then(() => {
      // Update successful.
      this.setState({
        hasError: false
      })
      alert('Your password has been updated successfully');
    }).catch((error) => {
      // wrong = JSON.stringify(error)
      this.setState({
        hasError: true,
        messageError: error.message
      })
    });
  }
  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'signOut') {
        // alert('Go Out');
        firebase.auth().signOut();
      }
    }
  }
  render() {
    const { newPassword, hasError, messageError } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name='md-lock' size={35} color={colors.white} />
          <Text style={{
            fontSize: 19,
            fontWeight: '400',
            // textAlign: 'center',
            marginLeft: 10,
            color: colors.white
          }}>CHANGE PASSWORD</Text>
        </View>
        {hasError && <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
          <Icon name='md-close' size={20} color={colors.red} />
          <Text style={{
            fontSize: 15,
            fontWeight: '100',
            marginLeft: 15,
            color: colors.red,
            textAlign: 'center'

          }}>{messageError}</Text>
        </View>}
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TextInput placeholder='Your password here' keyboardType='visible-password'
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
                newPassword: value
              })
            }}
            value={newPassword} />
          <TouchableOpacity activeOpacity={.8} style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#E8774E',
            width: 250,
            borderRadius: 2,
            // marginBottom: 10,
            padding: 12,
          }} onPress={() => {
            // const user = firebase.auth().currentUser;
            // alert(JSON.stringify(user))
            this.changePassword(newPassword);
            this.setState({
              newPassword: ''
            })
          }}>
            <Text style={{
              color: colors.white,
              fontSize: 14,
              fontWeight: '500',
            }}>UPDATE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-between',
    // alignItems: 'center',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#9a9a9a',
    marginBottom: 90,
  }
})

export default RemoteScreen;
