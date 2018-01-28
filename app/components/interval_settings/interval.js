import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Picker,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  View,
  Modal
} from 'react-native';
import { mainStyles } from '../../styles/main_styles.js';
import { settingsStyles } from '../../styles/settings_styles.js';
import Notifications from '../../util/notifications.js';

class Interval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: this.props.interval,
      start: this.props.start,
      end: this.props.end
    };
  }

  saveDetails() {
    const interval = this.state.interval;
    const start = this.state.start;
    const end = this.state.end;
    if (interval && start && end) {
      AsyncStorage.setItem("interval", interval)
      .then(() => this.props.receiveInterval(interval))
      .then(() => this.props.hideInterval());
    }
    const notifications = new Notifications();
    notifications.clearAllNotifications();
    notifications.setNotifications(interval, start, end);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      interval: newProps.interval,
      start: newProps.start,
      end: newProps.end
    });
  }

  render() {
    return (
      <Modal
        transparent
        animationType={"slide"}
        visible={this.props.show}>
        <View style={settingsStyles.container}>
          <Text
            style={settingsStyles.text}
            >Select a new interval for notifications:</Text>
          <Picker
            selectedValue={`${this.state.interval}`}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({interval: itemValue});
            }}>
            <Picker.Item label="15 Minutes" value={`${15 * 60 * 1000}`} />
            <Picker.Item label="30 Minutes" value={`${30 * 60 * 1000}`} />
            <Picker.Item label="45 Minutes" value={`${45 * 60 * 1000}`} />
            <Picker.Item label="1 Hour" value={`${60 * 60 * 1000}`} />
            <Picker.Item label="1.5 Hours" value={`${90 * 60 * 1000}`} />
            <Picker.Item label="2 Hours" value={`${120 * 60 * 1000}`} />
          </Picker>
          <TouchableHighlight
            style={settingsStyles.button}
            onPress={() => {
              this.saveDetails();
            }}
            >
            <Text
              style={settingsStyles.buttonText}
              >Save</Text>
          </TouchableHighlight>
        </View>
    </Modal>
    );
  }
}

export default Interval;
