import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard  } from 'react-native';

import SearchField from './components/search-field/search-field.component';
import Map from './components/map/map.component';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      startingCoords: {
        latitude: null,
        longitude: null,
      },
      list:[],
      renderMap: false
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
    },
    list: [],
    renderMap: true
  });

  onGeoFailure = err => alert(err.message);

  getData = query => {
    const url = 'https://api.yelp.com/v3/businesses/search';
    const config = {
      headers: {
        Authorization: 'Bearer i3KuPuoajnu4nfXK8jlTexl9laJv3NuDWC88uf8JJ6r0Uf6j2mYJIlTiI_eJG6nSKtp9WF942mwtR7zIoxvR_pllfBmoQui-z9uOPXoIuDtjqB7svO65JWeBT5mcXXYx',
      },
      params: {
        term: query,
        latitude: this.state.startingCoords.latitude,
        longitude: this.state.startingCoords.longitude,
        radius: 5000
      }
    }

    axios.get(url, config)
    .then(response => this.setState({
      startingCoords: this.state.startingCoords,
      list: response.data.businesses,
      renderMap: true
    }))
    .catch(err => console.log(err));
  };
  
  render() {
    return (
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.container}>
          <SearchField getData={this.getData} />
          {this.state.renderMap == true ? <Map startingCoords={this.state.startingCoords} list={this.state.list} /> : null }
        </View>
      </TouchableWithoutFeedback>
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