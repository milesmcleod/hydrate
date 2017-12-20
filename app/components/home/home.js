import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Modal,
  AsyncStorage
} from 'react-native';
import {
  mainStyles
} from '../../styles/main_styles.js';
import SetupStyles from '../../styles/setup_styles.js';
import SetupContainer from '../setup/setup_container.js';
import SettingsContainer from '../settings/settings_container.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: undefined
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("frequency")
    .then((value) => {
      this.props.receiveFrequency(value);
      this.setState({
        frequency: value
      });
    })
    .then(() => {
      if (!this.props.frequency) {
        this.props.showSetup();
      }
    })
    .done();
  }

  render() {
    return (
      <View style={mainStyles.container}>
        <SetupContainer />
        <SettingsContainer />
        <View style={mainStyles.container}>
          <Text
            style={mainStyles.welcome}
            >Current Frequency:</Text>
          <Text
            style={mainStyles.welcome}
            >{this.props.frequency}</Text>
          <TouchableHighlight
            onPress={() => {
              this.props.showSettings();
            }}
            >
            <Text
              style={mainStyles.welcome}
              >Settings</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Home;
