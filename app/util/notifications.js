import PushNotificationIOS from 'react-native/Libraries/PushNotificationIOS/PushNotificationIOS.js';

class Notifications {

  constructor() {
  }

  getCurrentMoment() {
    const date = new Date();
    const offset = date.getTimezoneOffset();
    const currentDate = new Date(Date.now() - (offset * 60 * 1000)); //date
    const currentMoment = currentDate.getTime(); // milliseconds
    return currentMoment;
  }

  getLastMidnight(now) {
    const msPerDay = (24 * 60 * 60 * 1000);
    const msSinceMidnight = now % msPerDay;
    const lastMidnight = now - msSinceMidnight;
    return lastMidnight;
  }

  clearAllNotifications() {
    PushNotificationIOS.cancelLocalNotifications();
  }

  setNotifications(interval, startHour, endHour) {
    interval = Number(interval);
    const now = this.getCurrentMoment();
    const lastMidnight = this.getLastMidnight(now);
    const windowStart = lastMidnight + (startHour * 60 * 60 * 1000);
    const windowEnd = lastMidnight + (endHour * 60 * 60 * 1000);
    const msPerDay = (24 * 60 * 60 * 1000);

    // i collect every fire date in the next 24 hours and then
    // set notifications for each of those moments with repeatInterval: 'day'
    // set in the options object for the notification.

    const startOffset = (windowStart % msPerDay);
    const endOffset = (msPerDay - (windowEnd % msPerDay));
    const timeZoneOffset = new Date().getTimezoneOffset();
    const fireDates = {};

    let fireDate = windowStart + interval;
    while (fireDate <= windowEnd) {
      let text = new Date(fireDate).toISOString().slice(11, 16);
      if (Number(text.slice(0, 2)) >= 12) {
        let hour = (Number(text.slice(0, 2)) % 12);
        text = String(hour) + text.slice(2) + ' PM';
      } else if (text.slice(0, 2) === '00') {
        let hour = 12;
        text = String(hour) + text.slice(2) + ' AM';
      } else {
        text = text + ' AM';
      }
      const notificationOptions = {
        alertTitle: text,
        alertBody: "Time to drink water!",
        // fireDate: date,
        isSilent: true,
        repeatInterval: 'day'
      };
      fireDates[fireDate] = notificationOptions;
      fireDate += interval;
    }

    Object.keys(fireDates).forEach((moment) => {
      const options = fireDates[moment];
      moment = Number(moment);
      if (moment <= now) {
        moment += msPerDay;
      }
      let date = moment + (timeZoneOffset * 60 * 1000);
      date = new Date(date).toISOString();
      options.fireDate = date;
      PushNotificationIOS.scheduleLocalNotification(options);
      console.log(options);
    });
  }

}

export default Notifications;
