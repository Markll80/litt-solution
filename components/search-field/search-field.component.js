import React from 'react';
import { View, Button, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';

import styles from './search-field.styles';

class SearchField extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
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

  onGeoSuccess = () => {};

  onGeoFailure = () => {};

  handleChange = text => {
    this.setState({ query: text });
  };

  handleSubmit = () => {
    this.setState({ query: '' });
    alert('alert');
  };

  getData = () => {
    fetch('https://api.yelp.com/v3/businesses/search', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      }),
    });
  }

  render() {
    return (
      <View style={styles.searchfield}>
        <TextInput
          style={styles.textinput}
          placeholder='Type here...'
          placeholderTextColor='grey'
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleSubmit}
          autoCorrect={false}
          enablesReturnKeyAutomatically={true}
          returnKeyType='search'
          clearButtonMode='while-editing'
          value={this.state.query}
        />
      </View>
    );
  }
}

export default SearchField;