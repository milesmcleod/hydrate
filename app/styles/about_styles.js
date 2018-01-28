import {
  Stylesheet
} from 'react-native';

import Styles from './stylesheet.js';

export const aboutStyles = {
  container: {
    position: 'absolute',
    width: Styles.DEVICE_WIDTH,
    height: Styles.DEVICE_HEIGHT,
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
  textTop: {
    fontFamily: 'AvenirNext-DemiBold',
    color: '#FFFFFF',
    fontSize: Styles.FONT_SIZE_SMALLER * 1.2,
    marginLeft: (2 * Styles.DEVICE_WIDTH / 10),
    marginRight: (2 * Styles.DEVICE_WIDTH / 10),
    marginTop: (Styles.DEVICE_HEIGHT / 5),
  },
  text: {
    fontFamily: 'AvenirNext-DemiBold',
    color: '#FFFFFF',
    fontSize: Styles.FONT_SIZE_SMALLER * 1.2,
    marginLeft: (2 * Styles.DEVICE_WIDTH / 10),
    marginRight: (2 * Styles.DEVICE_WIDTH / 10),
    marginTop: (Styles.DEVICE_HEIGHT / 10),
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 1,
    padding: Styles.DEVICE_HEIGHT / 35,
    position: 'absolute',
    bottom: (Styles.DEVICE_WIDTH / 10),
    left: (2 * Styles.DEVICE_WIDTH / 10),
    right: (2 * Styles.DEVICE_WIDTH / 10)
  },
  buttonText: {
    fontFamily: 'AvenirNext-DemiBold',
    color: '#FFFFFF',
    fontSize: Styles.FONT_SIZE_SMALLER,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};
