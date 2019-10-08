import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './map.styles';

const Map = () => (
  <MapView
    style={styles.map}
    provider={PROVIDER_GOOGLE}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
);

export default Map;