import { Navigation } from 'react-native-navigation';

import RemoteScreen from './Remote/';
import TripsScreen from './Trips/';
import TripDetails from './Trips/TripDetails';
import DriversScreen from './Drivers/';
import DriverDetails from './Drivers/DriverDetails';
import ErrorPage from './_defaults/ErrorPage';
import CarsScreen from './Cars';
import CarDetails from './Cars/CarDetails';
import SplashScreen from './_defaults/SplashScreen';
import SigninScreen from './Signin';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('TripsScreen', () => TripsScreen);
  Navigation.registerComponent('TripDetails', () => TripDetails);
  Navigation.registerComponent('DriversScreen', () => DriversScreen);
  Navigation.registerComponent('DriverDetails', () => DriverDetails);
  Navigation.registerComponent('CarsScreen', () => CarsScreen);
  Navigation.registerComponent('CarDetails', () => CarDetails);
  Navigation.registerComponent('RemoteScreen', () => RemoteScreen);
  Navigation.registerComponent('ErrorPage', () => ErrorPage);
  Navigation.registerComponent('SplashScreen', () => SplashScreen);
  Navigation.registerComponent('SigninScreen', () => SigninScreen);
}