import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#0068FF',
    padding: 30,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  formInput: {
    flex: 1,
    height: 26,
    fontSize: 13,
    borderWidth: 1,
    borderColor: "#000000",
  }
});

export const initialStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#BDBDBD',
  },
  formInput: {
    height: 26,
    fontSize: 13,
    borderWidth: 1,
    borderColor: "#000000",
  }
});
