import { StyleSheet } from 'react-native';

import Styles from './stylesheet.js';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    padding: (Styles.DEVICE_WIDTH / 15)
  },
  invisible: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    padding: (Styles.DEVICE_WIDTH / 15),
    opacity: 0
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    padding: (Styles.DEVICE_WIDTH / 15)
  },
  logo: {
    fontSize: (1.75 * Styles.FONT_SIZE),
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
    marginTop: (Styles.DEVICE_WIDTH / 9),
    fontFamily: 'AvenirNext-Heavy'
  },
  text: {
    fontSize: Styles.FONT_SIZE_SMALL,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
  },
  data: {
    fontSize: Styles.FONT_SIZE_SMALL,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
    fontFamily: 'AvenirNext-DemiBold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 4,
    padding: (Styles.DEVICE_WIDTH / 40)
  },
  aboutButton: {
    position: 'absolute',
    top: (Styles.DEVICE_WIDTH / 20),
    right: 0,
    width: (Styles.DEVICE_WIDTH / 15),
    height: (Styles.DEVICE_WIDTH / 15),
  },
  aboutIcon: {
    height: (Styles.DEVICE_WIDTH / 15),
    width: (Styles.DEVICE_WIDTH / 15)
  },
  toggle: {
    position: 'absolute',
    top: (Styles.DEVICE_WIDTH / 23),
    left: 0,
    transform: [{ scaleX: .7 }, { scaleY: .7 }]
  }
});
