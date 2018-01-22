export const ADD_NOTIFICATION_OBJECT = "ADD_NOTIFICATION_OBJECT";

export const receiveNotificationObject = (timeoutID) => ({
  type: ADD_NOTIFICATION_OBJECT,
  timeoutID
});
