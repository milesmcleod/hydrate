import {
  Stylesheet
} from 'react-native';

import Style from './stylesheet.js';

export const aboutStyles = {
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'AvenirNext-DemiBold',
    color: '#FFFFFF',
    fontSize: Style.FONT_SIZE_SMALL,
    margin: (2 * Style.DEVICE_WIDTH / 12)
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 1,
    padding: 10,
    marginBottom: 50,
    position: 'absolute',
    bottom: 20,
    left: (2 * Style.DEVICE_WIDTH / 10),
    right: (2 * Style.DEVICE_WIDTH / 10)
  },
  buttonText: {
    fontFamily: 'AvenirNext-DemiBold',
    color: '#FFFFFF',
    fontSize: Style.FONT_SIZE_SMALL,
  }
};
