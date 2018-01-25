import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Switch,
  Image,
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
import Util from '../../util/util.js';
import * as Options from '../../util/notification_options.js';
import Notifications from '../../util/notifications.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.on,
      interval: undefined,
      start: undefined,
      end: undefined,
      notificationTimeoutID: this.props.notificationTimeoutID
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      interval: newProps.interval,
      start: newProps.start,
      end: newProps.end,
      on: newProps.on,
      notificationTimeoutID: newProps.notificationTimeoutID
    });
  }

  render() {
    const style = this.props.show ? mainStyles.container : mainStyles.invisible;
    if (this.state.on) {
      return (
        <View
          style={style}>
          <TouchableHighlight
            style={mainStyles.aboutButton}
            onPress={() => {
              this.props.hideHome();
              setTimeout(this.props.showAbout, 50);
            }}
            >
            <Image
              source={require('../../../assets/links/info.png')}
              style={mainStyles.aboutIcon}
              ></Image>
          </TouchableHighlight>
          <Switch
            style={mainStyles.switch}
            onTintColor={'#00997a'}
            tintColor={'#FFFFFF'}
            thumbTintColor={'#FFFFFF'}
            value={this.state.on}
            onValueChange={(value) => {
              console.log(value);
              if (value) {
                let notificationObject = new Notifications(
                  this.state.notificationTimeoutID
                );
                notificationObject.setDayNotifications(
                  this.state.interval,
                  this.state.start,
                  this.state.end);
                notificationObject.setFutureNotifications(
                  this.state.interval,
                  this.state.start,
                  this.state.end);
                this.props.receiveNotificationObject(
                  notificationObject.timeoutID
                );
              } else {
                let notificationObject = new Notifications(
                  this.state.notificationTimeoutID
                );
                notificationObject.clearAllNotifications();
              }
              setTimeout(() => this.props.toggle(value), 200);
            }}
            ></Switch>
          <Text
            style={mainStyles.logo}
            >Hydrate!</Text>
          <View style={mainStyles.innerContainer}>
            <Text
              style={mainStyles.text}
              >You will receive reminders every</Text>
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
      );
    } else {
      return (
        <View
          style={style}>
          <TouchableHighlight
            style={mainStyles.aboutButton}
            onPress={() => {
              this.props.hideHome();
              setTimeout(this.props.showAbout, 50);
            }}
            >
            <Image
              source={require('../../../assets/links/info.png')}
              style={mainStyles.aboutIcon}
              ></Image>
          </TouchableHighlight>
          <Switch
            style={mainStyles.switch}
            onTintColor={'#00997a'}
            tintColor={'#FFFFFF'}
            thumbTintColor={'#FFFFFF'}
            value={this.state.on}
            onValueChange={(value) => {
              console.log(value);
              if (value) {
                let notificationObject = new Notifications(
                  this.state.notificationTimeoutID
                );
                notificationObject.setDayNotifications(
                  this.state.interval,
                  this.state.start,
                  this.state.end);
                notificationObject.setFutureNotifications(
                  this.state.interval,
                  this.state.start,
                  this.state.end);
                this.props.receiveNotificationObject(
                  notificationObject.timeoutID
                );
              } else {
                let notificationObject = new Notifications(
                  this.state.notificationTimeoutID
                );
                notificationObject.clearAllNotifications();
              }
              setTimeout(() => this.props.toggle(value), 200);
            }}
            ></Switch>
          <Text
            style={mainStyles.logo}
            >Hydrate!</Text>
          <View style={mainStyles.innerContainer}>
            <Text
              style={mainStyles.text}
              >You will not receive reminders.</Text>
          </View>
        </View>
      );
    }

  }
}

export default Home;
