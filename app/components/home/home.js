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
import Util from '../../util/util.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: undefined
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("interval")
    .then((value) => {
      this.props.receiveFrequency(value);
      this.setState({
        interval: value
      });
    })
    .then(() => {
      if (!this.props.interval) {
        this.props.showSetup();
      }
    })
    .done();
  }

  render() {
    console.log('cool!');
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
            >{this.props.interval}</Text>
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
