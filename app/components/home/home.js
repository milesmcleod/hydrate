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
import IntervalContainer from '../interval_settings/interval_container.js';
import StartContainer from '../start_settings/start_container.js';
import EndContainer from '../end_settings/end_container.js';
import Util from '../../util/util.js';
import * as Options from '../../util/notification_options.js';

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
        <IntervalContainer />
        <StartContainer />
        <EndContainer />
        <View style={mainStyles.container}>
          <Text
            style={mainStyles.logo}
            >Hydrate!</Text>
          <View style={mainStyles.innerContainer}>
            <Text
              style={mainStyles.text}
              >You receive reminders every</Text>
            <TouchableHighlight
              style={mainStyles.button}
              onPress={() => {
                this.props.showInterval();
              }}
              >
              <Text
                style={mainStyles.data}
                >{Options.INTERVALS[this.props.interval]}</Text>
            </TouchableHighlight>
            <Text
              style={mainStyles.text}
              >starting at</Text>
            <TouchableHighlight
              style={mainStyles.button}
              onPress={() => {
                this.props.showStart();
              }}
              >
              <Text
                style={mainStyles.data}
                >{Options.HOURS[this.props.start]}</Text>
            </TouchableHighlight>
            <Text
              style={mainStyles.text}
              >and ending at</Text>
            <TouchableHighlight
              style={mainStyles.button}
              onPress={() => {
                this.props.showEnd();
              }}
              >
              <Text
                style={mainStyles.data}
                >{Options.HOURS[this.props.end]}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
