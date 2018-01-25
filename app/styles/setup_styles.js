import { StyleSheet } from 'react-native';

import Styles from './stylesheet.js';

export const setupStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  scrollContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: Styles.DEVICE_WIDTH / 8,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 0,
  },
  text: {
    fontSize: Styles.FONT_SIZE_SMALL,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 5,
    fontFamily: 'AvenirNext-DemiBold',
  },
  picker: {
    color: '#FFFFFF',
    marginBottom: 20,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  formInput: {
    height: 26,
    fontSize: 13,
    borderWidth: 1,
    borderColor: "#000000",
    opacity: 0.5
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: (Styles.DEVICE_WIDTH / 30),
    marginBottom: (Styles.DEVICE_HEIGHT / 6)
  }
});
