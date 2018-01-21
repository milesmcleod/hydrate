import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from 'react-native/Libraries/PushNotificationIOS/PushNotificationIOS.js';

PushNotification.configure({

    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );

        // process the notification

        // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
        notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
    senderID: "YOUR GCM SENDER ID",

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
        alert: true,
        badge: true,
        sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
      * (optional) default: true
      * - Specified if permissions (ios) and token (android and ios) will requested or not,
      * - if not, you must call PushNotificationsHandler.requestPermissions() later
      */
    requestPermissions: true,
});

class Util {

  constructor(options) {
    this.calculateMoments = this.calculateMoments.bind(this);
    this.notify = this.notify.bind(this);
    this.generateTimeouts = this.generateTimeouts.bind(this);

    // this.frequency = options.frequency;
    // this.startTime = options.startTime; // milleseconds since midnight
    // this.endTime = options.endTime; // milliseconds since midnight

    this.moments = [];
    this.timeoutIds = [];
    this.midnightID = undefined;

    const date = new Date();
    const offset = date.getTimezoneOffset();
    this.currentDate = new Date(Date.now() - (offset * 60 * 1000)); //date
    this.currentMoment = this.currentDate.getTime(); // milliseconds
  }

  notify(id, text, sound) {
    const dateString = new Date(this.currentMoment).toJSON();
    const date = dateString.slice(0, 10);
    const time = dateString.slice(11, 16);
    const dateArgument = `${date} ${time}`;
    PushNotification.localNotificationSchedule({
      message: "Time to drink water!", // (required)
      date: new Date(Date.now() + (5 * 1000)) // in 5 secs
    });
  }

  generateTimeouts() {
    for (let i = 0; i < this.moments.length; i++) {
      const moment = this.moments.pop;
      const id = setTimeout(() => {
        this.notify();
      }, moment);
      this.timeoutIds.push(id);
    }
  }

  calculateMoments() {
    const totalWindow = this.endTime - this.startTime;
    const singleWindow = Math.round(totalWindow / this.frequency);
    for (let i = 0; i < this.frequency; i++) {
      const newOffset = Math.floor(Math.random() * singleWindow);
      const moment = this.startTime + (i * singleWindow) + newOffset;
      this.moments.push(moment);
    }
  }

  setMidnightInterval() {
    const msPerDay = (24 * 60 * 60 * 1000);
    const msTilMidnight = msPerDay - (this.currentMoment % msPerDay);
    this.midnightID = setTimeout(() => {
      this.calculateMoments();
      this.generateTimeouts();
    }, msTilMidnight);
  }

}

export default Util;
