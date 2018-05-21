import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import * as colors from '_config/colors';

class CarDetails extends Component {

  state = {
    selectedTab: 'informations'
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('_images/tesla.jpeg')} style={styles.imageStyle} />
        <Text style={{
          fontSize: 15,
          fontWeight: '500',
          textAlign: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#efefef',
          padding: 10
        }}>Tesla</Text>
        <View style={{
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <TouchableOpacity style={[
            styles.selectedBtn,
            { marginRight: 40, },
            this.state.selectedTab === 'informations' && { borderBottomColor: colors.orange, }
          ]}
            onPress={e => this.setState({ selectedTab: 'informations', })}>
            <Text style={[
              styles.buttonText,
              this.state.selectedTab === 'informations' && { color: colors.orange, }
            ]}>Informations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[
            styles.selectedBtn,
            this.state.selectedTab === 'statistics' && { borderBottomColor: colors.orange, }
          ]} onPress={e => this.setState({ selectedTab: 'statistics', })}>
            <Text style={[
              styles.buttonText,
              this.state.selectedTab === 'statistics' && { color: colors.orange, }
            ]}>Statistics</Text>
          </TouchableOpacity>
        </View>
        {this.state.selectedTab === 'informations' && <Informations />}
        {this.state.selectedTab === 'statistics' && <Statistics />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageStyle: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  selectedBtn: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    width: 100,
  },
  buttonText: {
    color: '#C2BCBA',
    fontSize: 16,
    fontWeight: '300',
    paddingBottom: 12,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.dark,
    width: 200,
    marginLeft: 30
  },
  infoDescription: {
    fontSize: 15,
    fontWeight: '200',
    color: colors.orange,
  }
})

const Informations = () => (
  <View style={{
    justifyContent: 'space-evenly',
    flex: 1,
    padding: 10,
    marginTop: 15,
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 8,
    backgroundColor: colors.grey
  }}>
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Number of places</Text>
      <Text style={styles.infoDescription}>4</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Registration</Text>
      <Text style={styles.infoDescription}>38-A-755</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Type</Text>
      <Text style={styles.infoDescription}>Diesel</Text>
    </View>
  </View>
)

const Statistics = () => (
  <ScrollView style={{ flex: 1, }}
    contentContainerStyle={{
      backgroundColor: colors.grey,
      alignItems: 'center',
      padding: 10,
      // paddingTop: 10,
    }}>
    <Image source={require('_images/chart.png')} />
  </ScrollView>
)
export default CarDetails;
