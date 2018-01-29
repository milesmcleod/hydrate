import React from 'react';

import {
  Switch
} from 'react-native';

import Notifications from '../../util/notifications.js';

import {
  mainStyles
} from '../../styles/main_styles.js';

class Toggle extends React.Component {
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
    return (
      <Switch
        style={mainStyles.toggle}
        onTintColor={'#00997a'}
        tintColor={'#FFFFFF'}
        thumbTintColor={'#FFFFFF'}
        value={this.state.on}
        onValueChange={(value) => {
          console.log(value);
          if (value) {
            let notifications = new Notifications();
            notifications.setNotifications(
              this.state.interval,
              this.state.start,
              this.state.end
            );
            this.props.receiveNotificationObject(
              notifications.timeoutID
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
    );
  }
}

export default Toggle;
