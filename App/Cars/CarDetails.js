import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import PureChart from 'react-native-pure-chart';

import firestore from '_config/database';
import * as colors from '_config/colors';

class CarDetails extends Component {

  state = {
    selectedTab: 'informations',
    car: {},
    isLoading: false
  }

  handleErrorPage = () => {
    this.props.navigator.push({
      screen: 'ErrorPage',
      navigatorStyle: {
        tabBarHidden: true,
      }
    });
  }

  componentDidMount() {
    firestore.collection("cars").doc(this.props.id).onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        this.setState({
          car: {
            carName: data.carName,
            carMatricule: data.carMatricule,
            carType: data.carType,
            carPlaces: data.carPlaces,
            postedCarAt: data.postedCarAt,
            carId: doc.id
          },
          isLoading: false
        })
      } else {
        this.handleErrorPage();
      }
    });
  }

  render() {
    const { car, isLoading, selectedTab } = this.state;

    if (isLoading) {
      return [
        <ActivityIndicator key={0} size='large' color={colors.orange} />
      ]
    }
    return [
      <View key={1} style={styles.container}>
        <Image source={require('_images/tesla.jpeg')} style={styles.imageStyle} />
        <Text style={{
          fontSize: 15,
          fontWeight: '500',
          textAlign: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#efefef',
          padding: 10
        }}>{car.carName}</Text>
        <View style={{
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <TouchableOpacity style={[
            styles.selectedBtn,
            { marginRight: 40, },
            selectedTab === 'informations' && { borderBottomColor: colors.orange, }
          ]}
            onPress={e => this.setState({ selectedTab: 'informations', })}>
            <Text style={[
              styles.buttonText,
              selectedTab === 'informations' && { color: colors.orange, }
            ]}>Informations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[
            styles.selectedBtn,
            selectedTab === 'statistics' && { borderBottomColor: colors.orange, }
          ]} onPress={e => this.setState({ selectedTab: 'statistics', })}>
            <Text style={[
              styles.buttonText,
              selectedTab === 'statistics' && { color: colors.orange, }
            ]}>Statistics</Text>
          </TouchableOpacity>
        </View>
        {selectedTab === 'informations' && <Informations car={car} />}
        {selectedTab === 'statistics' && <Statistics />}
      </View>
    ]
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
    width: 160,
    marginLeft: 30
  },
  infoDescription: {
    flex: 1,
    fontSize: 15,
    fontWeight: '200',
    textAlign: 'center',
    color: colors.orange,
  }
})

const Informations = ({ car }) => (
  <View style={{
    justifyContent: 'space-evenly',
    flex: 1,
    padding: 5,
    // marginTop: 10,
    // marginRight: 8,
    // marginLeft: 8,
    // marginBottom: 8,
    margin: 8,
    backgroundColor: colors.grey
  }}>
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Number of places</Text>
      <Text style={styles.infoDescription}>{car.carPlaces}</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Registration</Text>
      <Text style={styles.infoDescription}>{car.carMatricule}</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Type</Text>
      <Text style={styles.infoDescription}>{car.carType}</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>Added at</Text>
      <Text style={styles.infoDescription}>{car.postedCarAt}</Text>
    </View>
  </View>
)

class Statistics extends Component {
  render() {
    const sampleData = [
      {
        seriesName: 'series1',
        data: [
          { x: 'Janvier', y: 30 },
          { x: 'Mars', y: 200 },
          { x: 'Avril', y: 170 },
          { x: 'Juin', y: 250 },
          { x: 'Août', y: 10 }
        ],
        color: '#297AB1'
      },
      {
        seriesName: 'series2',
        data: [
          { x: 'Janvier', y: 20 },
          { x: 'Mars', y: 100 },
          { x: 'Avril', y: 140 },
          { x: 'Juin', y: 550 },
          { x: 'Août', y: 40 }
        ],
        color: colors.grey_dark
      }
    ];
    return (
      <ScrollView 
        contentContainerStyle={{
          backgroundColor: colors.white,
          padding: 3,
          marginTop: 8,
          // paddingTop: 10,
        }}>
        <Text style={{
          fontSize: 14,
          fontWeight: '400',
          textAlign: 'center',
          marginTop: 5,
          color: colors.grey_dark
        }}> Gasoil consumption by Month (Litter)</Text>

        <PureChart
          width={'100%'}
          height={220}
          data={sampleData}
          numberOfYAxisGuideLine={8}
          type='bar' />
      </ScrollView>
    )
  }
}

export default CarDetails;
