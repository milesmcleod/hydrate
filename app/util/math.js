class Math {

  constructor(options) {
    this.frequency = options.frequency;
    this.startTime = options.startTime; // milleseconds since midnight
    this.endTime = options.endTime; // milliseconds since midnight
    this.moments = [];
    this.timeoutIds = [];
    const date = new Date();
    const offset = date.getTimezoneOffset();
    this.currentDate = new Date(Date.now() - (offset * 60 * 1000)); //date
    this.currentMoment = this.currentDate.getTime(); // milliseconds
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

  generateNotification() {

  }

  generateNotificationTimeouts() {

  }

}
