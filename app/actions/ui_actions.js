export const SHOW_SETTINGS = "SHOW_SETTINGS";
export const HIDE_SETTINGS = "HIDE_SETTINGS";

export const SHOW_SETUP = "SHOW_SETUP";
export const HIDE_SETUP = "HIDE_SETUP";

const showSettings = () => ({
  type: SHOW_SETTINGS
});

const showInitial = () => ({
  type: SHOW_SETUP
});
