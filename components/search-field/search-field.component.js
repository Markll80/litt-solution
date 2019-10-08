import React from 'react';
import { View, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';

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

    render() {
        return(
            <View>
                <SearchBar
                platform='ios'
                placeholder='Type here...'
                onChangeText={this.handleChange}
                value={this.state.query}
                />
                <Button title='Search!'/>
            </View>
        );
    }
}

export default SearchField;