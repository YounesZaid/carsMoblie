import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ElevatedView from 'fiber-react-native-elevated-view';
import Icon from 'react-native-vector-icons/Ionicons';

import * as colors from '_config/colors';

class CarItem extends Component {

  handlePushPage = () => {
    this.props.navigator.push({
      screen: 'CarDetails',
      title: 'Car details',
      passProps:{id: this.props.car.carId},
      navigatorStyle: {
        tabBarHidden: true,
      }
    })
  }

  render() {
    const { car } = this.props;

    return (
      <ElevatedView
        style={{
          borderRadius: 2,
          backgroundColor: colors.white,
          marginBottom: 10,
        }}
        elevation={4}
        elevationColor={colors.dark}
        activeElevation={2}>
        <Image source={require('_images/tesla.jpeg')} style={styles.imageStyle} />
        <View style={styles.carInfoContainer}>
          <View style={{
            marginRight: 40
          }}>
            <Text style={styles.textDescription}>{car.carName}</Text>
            <Text style={styles.textTitle}>Model</Text>
          </View>
          <View style={{
            flex: 1
          }}>
            <Text style={styles.textDescription}>{car.carName}</Text>
            <Text style={styles.textTitle}>Name</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.handlePushPage()}
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <Text style={{
              marginRight: 10,
              fontSize: 12,
              fontWeight: '100',
              color: colors.dark
            }}>Show more</Text>
            <Icon name="ios-arrow-forward-outline" size={20} color={colors.dark} />
          </TouchableOpacity>
        </View>
      </ElevatedView>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
  },
  carInfoContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '100',
    color: '#C2BCBA'
  },
  textDescription: {
    fontSize: 15,
    fontWeight: '100',
    color: colors.orange
  }
})

export default CarItem;
