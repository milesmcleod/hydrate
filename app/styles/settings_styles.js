import { StyleSheet } from 'react-native';

export const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    margin: 15,
    borderRadius: 20,
    marginTop: 180,
    marginBottom: -50,
    opacity: 0.97,
    padding: 30
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 10,
    margin: 40
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
  }
});
