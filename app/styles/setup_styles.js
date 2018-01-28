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
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: Styles.DEVICE_WIDTH / 8,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 0,
  },
  text: {
    fontSize: Styles.FONT_SIZE_SMALL,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'AvenirNext-DemiBold',
  },
  arrow: {
    fontSize: Styles.FONT_SIZE,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'AvenirNext-DemiBold',
  },
  picker: {
    color: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    padding: (Styles.DEVICE_WIDTH / 30)
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: (Styles.DEVICE_WIDTH / 30)
  },
  buttonText: {
    fontSize: Styles.FONT_SIZE_SMALL,
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'AvenirNext-DemiBold',
  }
});
