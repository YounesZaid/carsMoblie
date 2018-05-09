import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import * as colors from '_config/colors';

registerScreens(); // this is where you register all of your app's screens


const tabsStyle = {
  tabBarButtonColor: colors.grey_icon, // optional, change the color of the tab icons and text (also unselected)
  tabBarSelectedButtonColor: colors.orange, // optional, change the color of the selected tab icon and text (only selected)
  tabBarBackgroundColor: colors.white, // optional, change the background color of the tab bar
  initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0
  forceTitlesDisplay: true,
};

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Trips',
      screen: 'TripsScreen', // this is a registered name for a screen
      icon: require('Icons/icon.png'),
      /*selectedIcon: require('../img/one_selected.png'), // iOS only */
      title: 'Trips list',
    },
    {
      label: 'Drivers',
      screen: 'DriversScreen',
      icon: require('Icons/icon.png'),
      /* selectedIcon: require('../img/two_selected.png'), // iOS only */
      title: 'Drivers list',
    }
  ],
  appStyle: tabsStyle,
  animationType: 'none'
});