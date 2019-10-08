import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import SearchField from './components/search-field/search-field.component';
import Map from './components/map/map.component';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      startingCoords: {
        latitude: -1,
        longitude: -1
      },
      coordsList:[]
    }
  }

  componentDidMount() {
    const geoOptions = {
      enableHightAccuracy: true,
      timeout: 20000,
      maximumAge: 3600
    }
    navigator.geolocation.getCurrentPosition(this.onGeoSuccess, this.onGeoFailure, geoOptions);
  }

  onGeoSuccess = pos => this.setState({
    startingCoords: {
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude
    }
  });

  onGeoFailure = err => alert(err.message);

  getData = query => {
    const url = 'https://api.yelp.com/v3/businesses/search';
    const h = new Headers();
    h.append('Accept', 'application/json');
    h.append('Content-Type', 'application/json');

    const req = new Request();
    // fetch('https://api.yelp.com/v3/businesses/search', {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     term: query,
    //     latitude: this.state.startingCoords.latitude,
    //     longitude: this.state.startingCoords.longitude,
    //     radius: 5000
    //   }),
    // });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <SearchField getCoordsList={this.getCoordsList} />
        <Map coords={this.state.coords} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;