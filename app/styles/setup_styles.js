import { StyleSheet } from 'react-native';

import Styles from './stylesheet.js';

export const setupStyles = StyleSheet.create({
  container: {
    padding: 30,
    margin: 30,
  },
  scrollContainer: {
    padding: 30,
    margin: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 10,
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
    marginBottom: 20
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
    backgroundColor: '#000000',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#ffffff',
    padding: (Styles.DEVICE_WIDTH / 30),
    marginBottom: (Styles.DEVICE_WIDTH / 10)
  }
});
