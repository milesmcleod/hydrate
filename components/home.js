import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage
} from 'react-native';
import {
  mainStyles,
  initialStyles
 } from '../styles/main.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: ""
    };
  }

  saveFrequency(value) {
    AsyncStorage.setItem("frequency", value);
    this.setState({ frequency: value});
  }

  componentDidMount() {
    AsyncStorage.getItem("frequency").then((value) => {
      this.setState({
        frequency: value
      });
    }).done();
  }

  render() {
    let show;
    if (!this.state.frequency) {
      show = (
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



    const initial = <Text
      style={mainStyles.welcome}
      >Initial</Text>;
    const settings = <Text
      style={mainStyles.welcome}
      >Settings</Text>;
    return (
      <View style={mainStyles.container}>
        {show}
      </View>
    );
  }
}

export default Home;
