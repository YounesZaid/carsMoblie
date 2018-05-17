import { Navigation } from 'react-native-navigation';

import RemoteScreen from './Remote/';
import TripsScreen from './Trips/';
import TripDetails from './Trips/TripDetails';
import DriversScreen from './Drivers/';
import DriverDetails from './Drivers/DriverDetails';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('TripsScreen', () => TripsScreen);
  Navigation.registerComponent('TripDetails', () => TripDetails);
  Navigation.registerComponent('DriversScreen', () => DriversScreen);
  Navigation.registerComponent('DriverDetails', () => DriverDetails);
  Navigation.registerComponent('RemoteScreen', () => RemoteScreen);
}