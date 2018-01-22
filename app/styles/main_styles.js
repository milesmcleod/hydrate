import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    padding: 30
  },
  invisible: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    padding: 30,
    opacity: 0
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    padding: 30
  },
  logo: {
    fontSize: 40,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
  },
  data: {
    fontSize: 20,
    textAlign: 'center',
    color: '#bdbdbd',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 10
  }
});
