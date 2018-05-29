import { Navigation } from 'react-native-navigation';
import * as firebase from 'firebase';

import { registerScreens } from './screens';
import * as colors from '_config/colors';

registerScreens(); // this is where you register all of your app's screens

renderSplashScreen();


startApp = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
  
      renderApplication();
  
    } else {
      // User is signed out.
      renderSigninScreen();
      // alert('signed out');
    }
  });
}
setTimeout(() => {
  startApp();
}, 2000)

// setTimeout(() => {
//   renderApplication()
// }, 4000)

renderApplication = () => {

  const tabsStyle = {
    tabBarButtonColor: colors.grey_icon, // optional, change the color of the tab icons and text (also unselected)
    tabBarSelectedButtonColor: colors.orange, // optional, change the color of the selected tab icon and text (only selected)
    tabBarBackgroundColor: '#F5F5F5', // optional, change the background color of the tab bar
    initialTabIndex: 0, // optional, the default selected bottom tab. Default: 0
    forceTitlesDisplay: true,
    // tabBarCollapseOnScroll: true,
    // navBarHideOnScroll: true,
    statusBarHideWithNavBar: true,
  };

  const iconInsets = { // add this to change icon position (optional, iOS only).
    top: 6, // optional, default is 0.
    left: 0, // optional, default is 0.
    bottom: -6, // optional, default is 0.
    right: 0 // optional, default is 0.
  };

  const navigatorStyle = {
    navBarTextColor: colors.dark,
    navBarBackgroundColor: '#F5F5F5',
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
        // navigatorButtons: {
        //   rightButtons: [
        //     {
        //       id: 'custom-button',
        //       component: 'CustomButton', // This line loads our component as a nav bar button item
        //       passProps: {
        //         text: 'Hi!',
        //       },
        //     },
        //   ],
        // },
        navigatorStyle
      },
      {
        label: 'Drivers',
        screen: 'DriversScreen',
        icon: require('_images/tab-icons/driver.png'),
        selectedIcon: require('_images/tab-icons/driver-s.png'), // iOS only
        title: 'Drivers list',
        navigatorStyle
      },
      {
        label: 'Cars',
        screen: 'CarsScreen',
        icon: require('_images/tab-icons/car.png'),
        selectedIcon: require('_images/tab-icons/car-s.png'), // iOS only
        title: 'Cars list',
        navigatorStyle
      },
      {
        label: 'Profile',
        screen: 'ProfileScreen',
        icon: require('_images/tab-icons/remote.png'),
        selectedIcon: require('_images/tab-icons/remote-s.png'), // iOS only
        title: 'Manage profile',
        navigatorStyle
      },
    ],
    appStyle: tabsStyle,
    animationType: 'none'
  });
}

function renderSplashScreen() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'SplashScreen',
      navigatorStyle: {
        navBarHidden: true,
      }
    },
    animationType: 'fade',
  });
}

function renderSigninScreen() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'SigninScreen',
      navigatorStyle: {
        navBarHidden: true,
      }
    }
  });
}