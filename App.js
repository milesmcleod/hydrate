import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { mainStyles } from './styles/main.js';
import Home from './components/home.js';
import Initial from './components/initial.js';
import Settings from './components/settings.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Home />
    );
  }
}

export default App;
