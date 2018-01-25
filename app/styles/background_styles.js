import { StyleSheet, Dimensions } from 'react-native';

import Style from './stylesheet.js';

export const backgroundStyles = StyleSheet.create({
  black: {
    backgroundColor: '#00005e',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  scape: {
    position: 'absolute',
    backgroundColor: '#00005e',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    overflow: 'visible'
  },
  scapeImage: {
    flex: 1,
    width: undefined,
    height: Style.DEVICE_HEIGHT,
    position: 'relative',
    overflow: 'visible'
  },
  clouds: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: Style.DEVICE_HEIGHT / 20,
    bottom: (15 * Style.DEVICE_HEIGHT / 24),
    justifyContent: 'flex-start',
    flexDirection: 'column',
    overflow: 'visible'
  },
});
