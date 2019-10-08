import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import styles from './map.styles';

const Map = props => (
  <MapView
    style={styles.map}
    provider={PROVIDER_GOOGLE}
    initialRegion={{
      latitude: props.startingCoords.latitude,
      longitude: props.startingCoords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    {props.list.map(business => (
    <Marker
      key={business.id}
      coordinate={business.coordinates}
      title={business.name}
      description={business.alias}
    />
  ))}
  </MapView>
);

export default Map;