import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  AsyncStorage,
  Button,
  View,
  Modal
} from 'react-native';
import SetupStyles from '../../styles/setup_styles.js';

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: ""
    };
  }

  updateFrequency(value) {
    value = Number(value.replace(/[^0-9]/g, ''));
    if (value < 10) this.setState({ frequency: value });
  }

  saveFrequency() {
    const value = String(this.state.frequency);
    if (value) {
      AsyncStorage.setItem("frequency", value);
      this.props.receiveFrequency(value);
      this.props.hideSetup();
    }
  }

  componentDidMount() {
    AsyncStorage.getItem("frequency").then((value) => {
      this.setState({
        frequency: value
      });
    }).done();
  }

  render() {
    let inputValue;
    if (!this.state.frequency) {
      inputValue = '';
    } else {
      inputValue = String(this.state.frequency).slice(0, 1);
    }
    return (
      <Modal
        trasparent
        animationType={"fade"}
        visible={this.props.show}
        style={SetupStyles.container}>
        <Text>Input initial value</Text>
        <TextInput
          style={SetupStyles.formInput}
          keyboardType = 'numeric'
          onChangeText={(value) => this.updateFrequency(value)}
          value={inputValue}
          ></TextInput>
        <Button
          onPress={() => this.saveFrequency()}
          title="Save"
          style={SetupStyles.button}
        />
    </Modal>
    );
  }
}

export default Setup;

// going to need inputs for beginning and ending hours that demarcate
// the interval between which the notifications can happen
