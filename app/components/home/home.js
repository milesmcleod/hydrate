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
      interval: undefined,
      start: undefined,
      end: undefined
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("interval")
    .then((value) => {
      this.props.receiveInterval(value);
      this.setState({
        interval: value
      });
    })
    .then(() => AsyncStorage.getItem("start"))
    .then((value) => {
      this.props.receiveStart(value);
      this.setState({
        start: value
      });
    })
    .then(() => AsyncStorage.getItem("end"))
    .then((value) => {
      this.props.receiveEnd(value);
      this.setState({
        end: value
      });
    })
    .then(() => {
      if (!this.state.interval) {
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
            >Current Interval:</Text>
          <Text
            style={mainStyles.welcome}
            >{this.props.interval}</Text>
          <Text
            style={mainStyles.welcome}
            >Current Start:</Text>
          <Text
            style={mainStyles.welcome}
            >{this.props.start}</Text>
          <Text
            style={mainStyles.welcome}
            >Current End:</Text>
          <Text
            style={mainStyles.welcome}
            >{this.props.end}</Text>
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
