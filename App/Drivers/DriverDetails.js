import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';


import firestore from '_config/database';
import * as colors from '_config/colors';

class DriverDetails extends Component {
  state = {
    driver: null,
    isLoading: true
  }

  handleErrorPage = () => {
    this.props.navigator.push({
      screen: 'ErrorPage',
      navigatorStyle: {
        tabBarHidden: true,
      }
    });
  }

  goBack = () => {
    this.props.navigator.pop({
      animated: true, // does the pop have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    });
  }

  componentDidMount() {
    firestore.collection("drivers").doc(this.props.id).onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        const cardIdsDocPromises = [];
        const promise = firestore.collection("cards").doc(data.cardId).get();
        cardIdsDocPromises.push(promise);
        Promise.all(cardIdsDocPromises).then(cardDocs => {
          cardDocs.forEach(cardDoc => {
            if (data.cardId === cardDoc.id) {
              this.setState({
                driver: {
                  ...data,
                  ...(cardDoc.data())
                },
                isLoading: false
              })
            }
          });
        })
          .catch(error => {
            this.handleErrorPage();
          })
      } else {
        // 1
        // this.setState({ trip: null, isLoading: false })
        // 2
        this.handleErrorPage();
      }
    });
  }
  render() {
    const { driver, isLoading } = this.state;

    if (isLoading) {
      return [
        <ActivityIndicator key={0} size='large' color={colors.orange} />
      ]
    }
    return [
      <ScrollView key={1}
        contentContainerStyle={{
          flexDirection: 'column',
        }}>
        <View style={styles.driverDetailsHeader}>
          <Image source={require('_images/img.jpg')} style={styles.imageStyle} />
          <View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 5

            }}>
              <Text style={{
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                color: colors.dark,
                marginRight: 3
              }}>{driver.driverFirstName}</Text>
              <Text style={{
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                color: colors.dark,
              }}>{driver.driverLastName}</Text>
            </View>
            <Text style={{
              fontSize: 16,
              fontWeight: '200',
              textAlign: 'center',
              color: '#9C9B9B'
            }}>{driver.driverPhoneNumber}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.aboutStyle}>About Driver</Text>
          <View style={styles.aboutContentStyle}>
            <Text style={styles.TitleTextextStyle}>Hire date</Text>
            <Text style={styles.TextDescriptionStyle}>{driver.driverHireDate}</Text>
          </View>
          <View style={styles.aboutContentStyle}>
            <Text style={styles.TitleTextextStyle}>Registration</Text>
            <Text style={styles.TextDescriptionStyle}>{driver.driverRegistrationNumber}</Text>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.aboutStyle}>Card Driver</Text>
          <View style={styles.aboutContentStyle}>
            <Text style={styles.TitleTextextStyle}>Card number</Text>
            <Text style={styles.TextDescriptionStyle}>{driver.cardIdentifier}</Text>
          </View>
          <View style={styles.aboutContentStyle}>
            <Text style={styles.TitleTextextStyle}>Consumption</Text>
            <Text style={styles.TextDescriptionStyle}>70%</Text>
          </View>
        </View>
        <View style={styles.driverLocalizationStyle}>
          <Text style={styles.aboutStyle}>Driver localization</Text>
          <View style={styles.mapContainer} >
            <MapView style={styles.map}
              initialRegion={{
                latitude: 34.0132500,
                longitude: -6.8325500,
                latitudeDelta: 1,
                longitudeDelta: 1,
              }}>
              <MapView.Marker
                coordinate={{
                  latitude: 34.0132500,
                  longitude: -6.8325500,
                }}
                title={'marker title'}
                description={'marker description'}
              />
            </MapView>
          </View>
        </View>
      </ScrollView>,
      <TouchableOpacity key={2} style={{
        position: 'absolute',
        top: 10,
        left: 15,
      }} onPress={e => {
        this.goBack();
      }}>
        <Icon name='ios-arrow-round-back-outline' size={45} color={colors.dark} />
      </TouchableOpacity>
    ]
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
  },
  driverLocalizationStyle: {
    marginTop: 10,
    width: '100%',
    height: 300
  },
  mapContainer: {
    backgroundColor: '#efefef',
    width: 320,
    height: 250,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})

export default DriverDetails;
