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
          color: "#fff"
        }}>Uh Oh !</Text>
        <View style={{
          flexDirection: 'row',
          marginTop: 20
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '300',
            color: "#fff",
            marginRight: 10
          }}>
            Something went wrong
          </Text>
          <Icon name='ios-sad-outline' size={22} color="#fff" />
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
    backgroundColor: "rgba(217,43,43, 0.9)"
  }
})
export default ErrorPage;
