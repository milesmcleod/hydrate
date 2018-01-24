import PushNotificationIOS from 'react-native/Libraries/PushNotificationIOS/PushNotificationIOS.js';

class Notifications {

  constructor(timeoutID) {
    if (timeoutID) {
      this.timeoutID = timeoutID;
    } else {
      this.timeoutID = undefined;
    }
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
    clearTimeout(this.timeoutID);
  }

  setDayNotifications(interval, startHour, endHour) {
    interval = Number(interval);
    const now = this.getCurrentMoment();
    const lastMidnight = this.getLastMidnight(now);
    let windowStart = lastMidnight + (startHour * 60 * 60 * 1000);
    const windowEnd = lastMidnight + (endHour * 60 * 60 * 1000);
    const fireDates = [];
    if (now > windowEnd) return;
    if (now > windowStart && now < windowEnd) {
      windowStart = lastMidnight;
      while (!(windowStart > now)) {
        windowStart += interval;
      }
    }
    while (windowStart <= windowEnd) {
      let text = new Date(windowStart).toISOString().slice(11, 16);
      if (Number(text.slice(0, 2)) > 12) {
        let hour = (Number(text.slice(0, 2)) % 12);
        text = String(hour) + text.slice(2) + ' PM';
      } else if (text.slice(0, 2) === '00') {
        let hour = 12;
        text = String(hour) + text.slice(2) + ' AM';
      } else {
        text = text + ' PM';
      }
      const offset = new Date().getTimezoneOffset();
      let date = windowStart + (offset * 60 * 1000);
      date = new Date(date).toISOString();
      PushNotificationIOS.scheduleLocalNotification({
        alertTitle: text,
        alertBody: "Time to drink water!", // (required)
        fireDate: date,
        isSilent: true
      });
      windowStart += interval;
    }
  }

  setFutureNotifications(interval, startHour, endHour) {
    this.setMidnightInterval(() => {
      this.setDayNotifications(interval, startHour, endHour);
      this.setFutureNotifications(interval, startHour, endHour);
    });
  }

  setMidnightInterval(callback) {
    const date = new Date();
    const offset = date.getTimezoneOffset();
    const currentDate = new Date(Date.now() - (offset * 60 * 1000)); //date
    const currentMoment = currentDate.getTime(); // milliseconds
    const msPerDay = (24 * 60 * 60 * 1000);
    const msTilMidnight = msPerDay - (currentMoment % msPerDay);
    this.timeoutID = setTimeout(callback, msTilMidnight);
  }

}

export default Notifications;
