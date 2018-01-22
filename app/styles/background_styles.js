import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');

export const backgroundStyles = StyleSheet.create({
  black: {
    backgroundColor: '#0068FF',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  scape: {
    position: 'absolute',
    backgroundColor: '#0068FF',
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
    height: win.height,
    position: 'relative',
    overflow: 'visible'
  },
  clouds: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 500,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    overflow: 'visible'
  },
});
