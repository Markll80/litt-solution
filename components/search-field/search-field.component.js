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

    handleChange = text => {
        this.setState({query: text});
    };

    handleSubmit = () => {
        this.setState({query: ''});
        alert('alert');
    };

    render() {
        return(
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