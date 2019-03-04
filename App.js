import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Print } from 'expo'

export default class App extends React.Component {
  state = {};

  componentDidMount = async () => {
    const printer = await Print.selectPrinterAsync();
    this.setState(printer);
  };

  onPress = () => {
    Print.printAsync({
      printerUrl: this.state.url,
      orientation: Print.Orientation.landscape,
      html: `
      <div>
        Hello World!
      </div>
      `,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Selected Printer: {this.state.name}</Text>
        <Button title="Print" onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
