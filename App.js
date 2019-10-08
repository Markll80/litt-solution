import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import SearchField from './components/search-field/search-field.component';

class App extends React.Component {
   render(){
    return (
      <View style={styles.container}>
        <SearchField/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;