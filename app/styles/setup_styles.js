import { StyleSheet } from 'react-native';

export const setupStyles = StyleSheet.create({
  container: {
    padding: 30,
    margin: 30,
  },
  scrollContainer: {
    padding: 30,
    margin: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    margin: 10,
  },
  picker: {
    color: '#FFFFFF'
  },
  formInput: {
    height: 26,
    fontSize: 13,
    borderWidth: 1,
    borderColor: "#000000",
    opacity: 0.5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 10,
    marginBottom: 50
  }
});
