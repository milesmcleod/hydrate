import { StyleSheet } from 'react-native';

export const slideStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#0068FF',
    padding: 30,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#0068FF',
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
    borderRadius: 1,
    padding: 10,
    marginBottom: 50,
    position: 'absolute',
    bottom: 20,
    left: 75,
    right: 75
  }
});
