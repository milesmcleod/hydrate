export const RECEIVE_FREQUENCY = "RECEIVE_FREQUENCY";
export const CLEAR_FREQUENCY = "CLEAR_FREQUENCY";
export const RECEIVE_NEW_FACT = "RECEIVE_NEW_FACT";

export const receiveFrequency = (frequency) => ({
  type: RECEIVE_FREQUENCY,
  frequency
});

export const clearFrequency = () => ({
  type: CLEAR_FREQUENCY
});

export const receiveNewFact = (payload) => ({
  type: RECEIVE_NEW_FACT,
  payload
});

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
