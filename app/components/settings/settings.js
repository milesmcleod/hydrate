import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  AsyncStorage,
  View,
  Modal
} from 'react-native';
import { mainStyles } from '../../styles/main_styles.js';
import SetupStyles from '../../styles/setup_styles.js';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: ""
    };
  }

  updateFrequency(value) {
    value = Number(value.replace(/[^0-9]/g, ''));
    if (value < 10 && value >= 0) this.setState({ frequency: value });
  }

  saveFrequency() {
    const value = String(this.state.frequency);
    if (value) {
      AsyncStorage.setItem("frequency", value);
      this.props.receiveFrequency(value);
      this.props.hideSettings();
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
        style={SetupStyles.container}
        >
        <Text>Edit value:</Text>
        <TextInput
          style={SetupStyles.formInput}
          keyboardType={'numeric'}
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

export default Settings;

// going to need inputs for beginning and ending hours that demarcate
// the interval between which the notifications can happen
