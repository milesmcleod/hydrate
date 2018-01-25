export const RECEIVE_INTERVAL = "RECEIVE_INTERVAL";
export const RECEIVE_START = "RECEIVE_START";
export const RECEIVE_END = "RECEIVE_END";
export const CLEAR_INTERVAL = "CLEAR_INTERVAL";
export const RECEIVE_NEW_FACT = "RECEIVE_NEW_FACT";
export const TOGGLE = "TOGGLE";

export const receiveInterval = (interval) => ({
  type: RECEIVE_INTERVAL,
  interval
});

export const receiveStart = (start) => ({
  type: RECEIVE_START,
  start
});

export const receiveEnd = (end) => ({
  type: RECEIVE_END,
  end
});

export const clearInterval = () => ({
  type: CLEAR_INTERVAL
});

export const receiveNewFact = (payload) => ({
  type: RECEIVE_NEW_FACT,
  payload
});

export const toggle = (on) => {
  if (on) {
    return ({
      type: TOGGLE,
      onBoolean: true
    });
  } else {
    return ({
      type: TOGGLE,
      onBoolean: false
    });
  }
};

export const getNewFact = () => (dispatch) => {
  fetch('https://hydrate.herokuapp.com/fact', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
  .then((response) => {
      return response.json();
  })
  .then((response) => {
    dispatch(receiveNewFact(response));
  });
};
