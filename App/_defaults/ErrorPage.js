import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

class ErrorPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{
          fontSize: 30,
          fontWeight: '700',
          color: "#F1A68C"
        }}>Uh Oh !</Text>
        <View style={{
          flexDirection: 'row',
          marginTop: 20
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '300',
            color: "#F1A68C",
            marginRight: 10
          }}>
            Something went wrong .
          </Text>
        </View>
        <Image source={require('_images/icons/error/broken.png')} style={{
          width: 190,
          marginTop: 40,
          marginBottom: 20,
          resizeMode: 'contain'
        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
export default ErrorPage;
