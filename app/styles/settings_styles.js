import { StyleSheet } from 'react-native';

import Styles from './stylesheet.js';

export const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.99)',
    margin: 15,
    borderRadius: 20,
    marginTop: 180,
    marginBottom: -50,
    padding: 30
  },
  text: {
    fontSize: Styles.FONT_SIZE_SMALL,
    textAlign: 'center',
    color: '#000000',
    margin: 10,
    fontFamily: 'AvenirNext-DemiBold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 5,
    padding: (Styles.DEVICE_WIDTH / 50),
    margin: 40
  },
  buttonText: {
    fontSize: Styles.FONT_SIZE_SMALL,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'AvenirNext-DemiBold',
    margin: 10,
  }
});
