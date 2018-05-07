import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Trips',
      screen: 'TripsScreen', // this is a registered name for a screen
      icon: require('Icons/icon.png'),
      /*selectedIcon: require('../img/one_selected.png'), // iOS only */
      title: 'Screen One'
    },
    {
      label: 'Drivers',
      screen: 'DriversScreen',
      icon: require('Icons/icon.png'),
      /* selectedIcon: require('../img/two_selected.png'), // iOS only */
      title: 'Screen Two'
    }
  ]
});