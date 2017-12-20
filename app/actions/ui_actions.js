export const SHOW_SETTINGS = "SHOW_SETTINGS";
export const HIDE_SETTINGS = "HIDE_SETTINGS";

export const SHOW_SETUP = "SHOW_SETUP";
export const HIDE_SETUP = "HIDE_SETUP";

const showSettings = () => ({
  type: SHOW_SETTINGS
});

const hideSettings = () => ({
  type: HIDE_SETTINGS
});

const showSetup = () => ({
  type: SHOW_SETUP
});

const hideSetup = () => ({
  type: HIDE_SETUP
});
