export const SHOW_SETTINGS = "SHOW_SETTINGS";
export const HIDE_SETTINGS = "HIDE_SETTINGS";

export const SHOW_SETUP = "SHOW_SETUP";
export const HIDE_SETUP = "HIDE_SETUP";

export const showSettings = () => ({
  type: SHOW_SETTINGS
});

export const hideSettings = () => ({
  type: HIDE_SETTINGS
});

export const showSetup = () => ({
  type: SHOW_SETUP
});

export const hideSetup = () => ({
  type: HIDE_SETUP
});
