import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import * as colors from '_config/colors';

registerScreens(); // this is where you register all of your app's screens


const tabsStyle = {
  tabBarButtonColor: colors.grey_icon, // optional, change the color of the tab icons and text (also unselected)
  tabBarSelectedButtonColor: colors.orange, // optional, change the color of the selected tab icon and text (only selected)
  tabBarBackgroundColor: colors.white, // optional, change the background color of the tab bar
  initialTabIndex: 3, // optional, the default selected bottom tab. Default: 0
  forceTitlesDisplay: true,
};

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Trips',
      screen: 'TripsScreen', // this is a registered name for a screen
      icon: require('_images/tab-icons/pin.png'),
      selectedIcon: require('_images/tab-icons/driver.png'), // iOS only
      title: 'Trips list',
    },
    {
      label: 'Drivers',
      screen: 'DriversScreen',
      icon: require('_images/tab-icons/driver.png'),
      selectedIcon: require('_images/tab-icons/driver-s.png'), // iOS only
      title: 'Drivers list',
    },
    {
      label: 'Cars',
      screen: 'CarsScreen',
      icon: require('_images/tab-icons/car.png'),
      selectedIcon: require('_images/tab-icons/car-s.png'), // iOS only
      title: 'Cars list',
    },
    {
      label: 'Remote',
      screen: 'ErrorPage',
      icon: require('_images/tab-icons/remote.png'),
      selectedIcon: require('_images/tab-icons/remote-s.png'), // iOS only
      title: 'Car remote',
    },
  ],
  appStyle: tabsStyle,
  animationType: 'none'
});