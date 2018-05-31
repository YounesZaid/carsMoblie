import { Navigation } from 'react-native-navigation';

import TripsScreen from './Trips/';
import TripDetails from './Trips/TripDetails';
import MapDetails from './Trips/MapDetails';
import DriversScreen from './Drivers/';
import DriverDetails from './Drivers/DriverDetails';
import ProfileScreen from './Profile/ProfileScreen';
import SigninScreen from './Profile/SigninScreen';
import ResetPassword from './Profile/ResetPassword';
import ErrorPage from './_defaults/ErrorPage';
import CarsScreen from './Cars';
import CarDetails from './Cars/CarDetails';
import SplashScreen from './_defaults/SplashScreen';
import CustomButton from './_config/ui/CustomButton';
import FilterBox from './_config/ui/FilterBox';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('TripsScreen', () => TripsScreen);
  Navigation.registerComponent('TripDetails', () => TripDetails);
  Navigation.registerComponent('MapDetails', () => MapDetails);
  Navigation.registerComponent('DriversScreen', () => DriversScreen);
  Navigation.registerComponent('DriverDetails', () => DriverDetails);
  Navigation.registerComponent('CarsScreen', () => CarsScreen);
  Navigation.registerComponent('CarDetails', () => CarDetails);
  Navigation.registerComponent('ProfileScreen', () => ProfileScreen);
  Navigation.registerComponent('SigninScreen', () => SigninScreen);
  Navigation.registerComponent('ResetPassword', () => ResetPassword);
  Navigation.registerComponent('ErrorPage', () => ErrorPage);
  Navigation.registerComponent('SplashScreen', () => SplashScreen);
  Navigation.registerComponent('CustomButton', () => CustomButton);
  Navigation.registerComponent('FilterBox', () => FilterBox);
}