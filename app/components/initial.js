import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  AsyncStorage,
  View
} from 'react-native';
import { initialStyles } from '../styles/main.js';

class Initial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: ""
    };
  }

  saveFrequency(value) {
    AsyncStorage.setItem("frequency", value);
    this.setState({ frequency: value });
  }

  componentDidMount() {
    AsyncStorage.getItem("frequency").then((value) => {
      this.setState({
        frequency: value
      });
    }).done();
  }

  render() {
    return (
      <View style={initialStyles.container}>
        <Text>Input initial value</Text>
        <TextInput
          style={initialStyles.formInput}
          onChangeText={(value) => this.saveFrequency(value)}
          value={this.state.frequency}
          ></TextInput>
      </View>
    );
  }
}

export default Initial;
