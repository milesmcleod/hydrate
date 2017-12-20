import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  AsyncStorage,
  View
} from 'react-native';
import SetupStyles from '../../styles/setup_styles.js';

class Setup extends React.Component {
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
      <View style={SetupStyles.container}>
        <Text>Input initial value</Text>
        <TextInput
          style={SetupStyles.formInput}
          onChangeText={(value) => this.saveFrequency(value)}
          value={this.state.frequency}
          ></TextInput>
      </View>
    );
  }
}

export default Setup;
