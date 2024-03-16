import React from 'react';
import ajax from './ajax'
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  async componentDidMount() { 
    const deals = await ajax.fetchInitialDeals();
    console.log(deals);
   }
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.header}>Bakesale</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
});
export default App;
