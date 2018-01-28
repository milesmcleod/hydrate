import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  Picker,
  TextInput,
  AsyncStorage,
  Button,
  View,
  ScrollView,
  TouchableHighlight,
  Modal
} from 'react-native';
import { setupStyles } from '../../styles/setup_styles.js';
import * as Options from '../../util/notification_options.js';
import Notifications from '../../util/notifications.js';

import Swiper from 'react-native-swiper';

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: "1800000",
      start: "9",
      end: "21"
    };
  }

  saveDetails() {
    const interval = this.state.interval;
    const start = this.state.start;
    const end = this.state.end;
    if (interval && start && end) {
      AsyncStorage.setItem("interval", interval)
      .then(() => AsyncStorage.setItem("start", start))
      .then(() => AsyncStorage.setItem("end", end))
      .then(() => this.props.receiveInterval(interval))
      .then(() => this.props.receiveStart(start))
      .then(() => this.props.receiveEnd(end))
      .then(() => this.props.hideSetup())
      .then(() => this.props.showHome())
      .done();
    }
    const notifications = new Notifications();
    notifications.clearAllNotifications();
    notifications.setNotifications(interval, start, end);
  }

  nextPage() {
    this.swiper.scrollBy(1);
  }

  prevPage() {
    this.swiper.scrollBy(-1);
  }

  render() {
    return (
      <Modal
        transparent
        animationType={"fade"}
        visible={this.props.show}
        style={setupStyles.container}>
        <Swiper
          ref={(component) => {
            this.swiper = component;
          }}
          showsPagination={false}
          horizontal={false}
          loop={false}
          activeDotStyle={{
            width: 12, height: 12,borderRadius: 6,
            marginTop: 6, marginBottom: 6
          }}
          activeDotColor={'rgba(255, 255, 255, 0.98)'}
          dotColor={'rgba(219, 219, 219, 0.8)'}>
          <View style={setupStyles.scrollContainer}>
            <Text
              style={setupStyles.text}
              >How often would you like to receive reminders?</Text>
            <Picker
              itemStyle={setupStyles.picker}
              selectedValue={this.state.interval}
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
              underlayColor={"rgba(0, 0, 0, 0)"}
              style={setupStyles.button}
              onPress={() => {
                this.nextPage();
              }}
              >
              <Text
                style={setupStyles.arrow}
                >╲╱</Text>
            </TouchableHighlight>
          </View>
          <View style={setupStyles.scrollContainer}>
            <TouchableHighlight
              underlayColor={"rgba(0, 0, 0, 0)"}
              style={setupStyles.button}
              onPress={() => {
                this.prevPage();
              }}
              >
              <Text
                style={setupStyles.arrow}
                >╱╲</Text>
            </TouchableHighlight>
            <Text
              style={setupStyles.text}
              >At what time of day would you like to begin receiving
              reminders?</Text>
            <Picker
              itemStyle={setupStyles.picker}
              selectedValue={this.state.start}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({start: itemValue});
              }}>
              <Picker.Item label='12:00 AM' value={`${0}`} />
              <Picker.Item label='1:00 AM' value={`${1}`} />
              <Picker.Item label='2:00 AM' value={`${2}`} />
              <Picker.Item label='3:00 AM' value={`${3}`} />
              <Picker.Item label='4:00 AM' value={`${4}`} />
              <Picker.Item label='5:00 AM' value={`${5}`} />
              <Picker.Item label='6:00 AM' value={`${6}`} />
              <Picker.Item label='7:00 AM' value={`${7}`} />
              <Picker.Item label='8:00 AM' value={`${8}`} />
              <Picker.Item label='9:00 AM' value={`${9}`} />
              <Picker.Item label='10:00 AM' value={`${10}`} />
              <Picker.Item label='11:00 AM' value={`${11}`} />
              <Picker.Item label='12:00 PM' value={`${12}`} />
              <Picker.Item label='1:00 PM' value={`${13}`} />
              <Picker.Item label='2:00 PM' value={`${14}`} />
              <Picker.Item label='3:00 PM' value={`${15}`} />
              <Picker.Item label='4:00 PM' value={`${16}`} />
              <Picker.Item label='5:00 PM' value={`${17}`} />
              <Picker.Item label='6:00 PM' value={`${18}`} />
              <Picker.Item label='7:00 PM' value={`${19}`} />
              <Picker.Item label='8:00 PM' value={`${20}`} />
              <Picker.Item label='9:00 PM' value={`${21}`} />
              <Picker.Item label='10:00 PM' value={`${22}`} />
              <Picker.Item label='11:00 PM' value={`${23}`} />
            </Picker>
            <TouchableHighlight
              underlayColor={"rgba(0, 0, 0, 0)"}
              style={setupStyles.button}
              onPress={() => {
                this.nextPage();
              }}
              >
              <Text
                style={setupStyles.arrow}
                >╲╱</Text>
            </TouchableHighlight>
          </View>
          <View style={setupStyles.scrollContainer}>
            <TouchableHighlight
              underlayColor={"rgba(0, 0, 0, 0)"}
              style={setupStyles.button}
              onPress={() => {
                this.prevPage();
              }}
              >
              <Text
                style={setupStyles.arrow}
                >╱╲</Text>
            </TouchableHighlight>
            <Text
              style={setupStyles.text}
              >At what time of day would you like to stop receiving
              reminders?</Text>
            <Picker
              itemStyle={setupStyles.picker}
              selectedValue={this.state.end}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({end: itemValue});
              }}>
              <Picker.Item label='12:00 AM' value={`${24}`} />
              <Picker.Item label='1:00 AM' value={`${1}`} />
              <Picker.Item label='2:00 AM' value={`${2}`} />
              <Picker.Item label='3:00 AM' value={`${3}`} />
              <Picker.Item label='4:00 AM' value={`${4}`} />
              <Picker.Item label='5:00 AM' value={`${5}`} />
              <Picker.Item label='6:00 AM' value={`${6}`} />
              <Picker.Item label='7:00 AM' value={`${7}`} />
              <Picker.Item label='8:00 AM' value={`${8}`} />
              <Picker.Item label='9:00 AM' value={`${9}`} />
              <Picker.Item label='10:00 AM' value={`${10}`} />
              <Picker.Item label='11:00 AM' value={`${11}`} />
              <Picker.Item label='12:00 PM' value={`${12}`} />
              <Picker.Item label='1:00 PM' value={`${13}`} />
              <Picker.Item label='2:00 PM' value={`${14}`} />
              <Picker.Item label='3:00 PM' value={`${15}`} />
              <Picker.Item label='4:00 PM' value={`${16}`} />
              <Picker.Item label='5:00 PM' value={`${17}`} />
              <Picker.Item label='6:00 PM' value={`${18}`} />
              <Picker.Item label='7:00 PM' value={`${19}`} />
              <Picker.Item label='8:00 PM' value={`${20}`} />
              <Picker.Item label='9:00 PM' value={`${21}`} />
              <Picker.Item label='10:00 PM' value={`${22}`} />
              <Picker.Item label='11:00 PM' value={`${23}`} />
            </Picker>
            <TouchableHighlight
              style={setupStyles.saveButton}
              onPress={() => {
                this.saveDetails();
              }}
              >
              <Text
                style={setupStyles.buttonText}
                >Save</Text>
            </TouchableHighlight>
          </View>
        </Swiper>

    </Modal>
    );
  }
}

export default Setup;

// going to need inputs for beginning and ending hours that demarcate
// the interval between which the notifications can happen
