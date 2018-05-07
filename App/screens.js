import { Navigation } from 'react-native-navigation';

import TripsScreen from './Trips/';
import DriversScreen from './Drivers/';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('TripsScreen', () => TripsScreen);
  Navigation.registerComponent('DriversScreen', () => DriversScreen);
}