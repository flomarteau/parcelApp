import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
// import RootNavigation from './navigation/RootNavigation';

import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

export default class App extends React.Component {

  render() {

    const RootStack = createStackNavigator(
      {
        Home: HomeScreen,
        Map: MapScreen,
      },
      {
        initialRouteName: 'Home',
      }
    );

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <RootStack />
        {/* <RootNavigation /> */}
      </View>
    );
  }

}

  // export default class App extends React.Component {
  //   render() {
  //     return <RootStack />;
  //   }
  // }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
