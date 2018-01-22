import { StyleSheet } from 'react-native';

import Style from './stylesheet.js';

export const slideStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 30,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 30
  },
  logo: {
    fontSize: Style.FONT_SIZE_TITLE,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
  },
  text: {
    fontSize: Style.FONT_SIZE,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
    fontFamily: 'AvenirNext-DemiBold',
    marginLeft: (Style.DEVICE_WIDTH / 10),
    marginRight: (Style.DEVICE_WIDTH / 10)
  },
  text2: {
    fontSize: Style.FONT_SIZE_SMALL,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
    fontFamily: 'AvenirNext-DemiBold',
    marginLeft: (Style.DEVICE_WIDTH / 10),
    marginRight: (Style.DEVICE_WIDTH / 10)
  },
  data: {
    fontSize: Style.FONT_SIZE,
    textAlign: 'center',
    color: '#bdbdbd',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    opacity: 0.9,
    borderRadius: 1,
    padding: 10,
    marginBottom: 50,
    position: 'absolute',
    bottom: 20,
    left: (2 * Style.DEVICE_WIDTH / 10),
    right: (2 * Style.DEVICE_WIDTH / 10)
  },
  backgroundView: {
    position: 'absolute',
    left: (Style.DEVICE_WIDTH / 10),
    right: (Style.DEVICE_WIDTH / 10),
    top: (2 * Style.DEVICE_HEIGHT / 5),
    bottom: (2 * Style.DEVICE_HEIGHT / 5),
    backgroundColor: '#000000',
    opacity: 0.7,
    borderRadius: 5
  },
  backgroundView2: {
    position: 'absolute',
    left: (Style.DEVICE_WIDTH / 10),
    right: (Style.DEVICE_WIDTH / 10),
    top: (2 * Style.DEVICE_HEIGHT / 7),
    bottom: (2 * Style.DEVICE_HEIGHT / 7),
    backgroundColor: '#000000',
    opacity: 0.7,
    borderRadius: 5
  }
});
