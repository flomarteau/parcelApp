import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class MapGoogle extends React.Component {
  render() {
    return(
      <View style={styles.container}>

        <MapView style={styles.map}
          initialRegion={{
            latitude: 48.852968,
            longitude: 2.349902,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}>
          </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});