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
    let notificationObject = new Notifications();
    notificationObject.clearAllNotifications();
    notificationObject.setDayNotifications(interval, start, end);
    notificationObject.setFutureNotifications(interval, start, end);
    this.props.receiveNotificationObject(notificationObject.timeoutID);
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
          showsButtons={true}
          horizontal={false}
          loop={false}
          activeDotStyle={{
            width: 12, height: 12,borderRadius: 6,
            marginTop: 6, marginBottom: 6
          }}
          activeDotColor={'rgba(255, 255, 255, 0.98)'}
          dotColor={'rgba(219, 219, 219, 0.8)'}>
          <View></View>
          <View></View>
          <View></View>
        </Swiper>

    </Modal>
    );
  }
}

export default Setup;

// going to need inputs for beginning and ending hours that demarcate
// the interval between which the notifications can happen
