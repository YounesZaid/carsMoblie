import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import * as colors from '_config/colors';

class DriverDetails extends Component {
  render() {
    const { name } = this.props;
    return (
      <ScrollView contentContainerStyle={{
        flexDirection: 'column',
      }}>
        <View style={styles.driverDetailsHeader}>
          <Image source={require('_images/img.jpg')} style={styles.imageStyle} />
          <View>
            <Text style={{
              fontSize: 18,
              fontWeight: '500',
              textAlign: 'center',
              color: colors.dark,
              marginBottom: 5
            }}>Younes Zaid</Text>
            <Text style={{
              fontSize: 16,
              fontWeight: '200',
              textAlign: 'center',
              color: '#9C9B9B'
            }}>+212672849591</Text>
          </View>
        </View>
        <View>
          <Text style={styles.aboutStyle}>About Driver</Text>
          <View style={styles.aboutContentStyle}>
            <Text style={styles.TitleTextextStyle}>Hire date</Text>
            <Text style={styles.TextDescriptionStyle}>12/07/2012</Text>
          </View>
          <View style={styles.aboutContentStyle}>
            <Text style={styles.TitleTextextStyle}>Registration</Text>
            <Text style={styles.TextDescriptionStyle}>Driver-01</Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.aboutStyle}>Card Driver</Text>
          <View style={styles.aboutContentStyle}>
            <Text style={styles.TitleTextextStyle}>Card number</Text>
            <Text style={styles.TextDescriptionStyle}>card-01</Text>
          </View>
          <View style={styles.aboutContentStyle}>
            <Text style={styles.TitleTextextStyle}>Consumption</Text>
            <Text style={styles.TextDescriptionStyle}>70%</Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.aboutStyle}>Driver localization</Text>
          <View style={{
            backgroundColor: '#efefef',
            width: 320,
            height: 200,
            marginRight: 20,
            marginLeft: 20,
            marginBottom: 20
          }} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  imageStyle: {
    width: 95,
    height: 95,
    borderRadius: 50,
  },
  driverDetailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    marginBottom: 8,
  },
  aboutStyle: {
    fontSize: 18,
    fontWeight: '200',
    color: colors.orange,
    marginRight: 20,
    marginLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    marginBottom: 15
  },
  aboutContentStyle: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    marginLeft: 20,
  },
  TitleTextextStyle: {
    fontSize: 15,
    color: colors.dark,
    width: 200,
    marginBottom: 8
  },
  TextDescriptionStyle: {
    fontSize: 15,
    color: '#9C9B9B',
  }
})

export default DriverDetails;
