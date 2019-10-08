import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './search-field.styles';

class SearchField extends React.Component {
  constructor() {
    super();

    this.state = {
      query: '',
    }
  }

  handleChange = text => {
    this.setState({ query: text });
  };

  handleSubmit = () => {
    this.props.getCoordsList(this.state.query);
    this.setState({ query: '' });
  };

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