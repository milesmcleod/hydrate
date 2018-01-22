import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import { mainStyles } from '../styles/main_styles.js';
import HomeContainer from './home/home_container.js';
import SetupContainer from './setup/setup_container.js';
import IntervalContainer from './interval_settings/interval_container.js';
import StartContainer from './start_settings/start_container.js';
import EndContainer from './end_settings/end_container.js';
import Black from './backgrounds/black.js';
import SlidesContainer from './intro/slides_container.js';


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

  componentDidMount() {

  }

  render() {
    return (
      <View style={mainStyles.container}>
        <Black />
        <SlidesContainer />
        <SetupContainer />
        <HomeContainer />
        <IntervalContainer />
        <StartContainer />
        <EndContainer />
      </View>
    );
  }
}

export default App;
