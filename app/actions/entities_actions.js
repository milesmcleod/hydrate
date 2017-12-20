export const RECEIVE_FREQUENCY = "RECEIVE_FREQUENCY";
export const CLEAR_FREQUENCY = "CLEAR_FREQUENCY";

export const receiveFrequency = (frequency) => ({
  type: RECEIVE_FREQUENCY,
  frequency
});

export const clearFrequency = () => ({
  type: CLEAR_FREQUENCY
});
