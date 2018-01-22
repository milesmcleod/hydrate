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

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
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
    // return (
    //   <SlidesContainer />
    // );
  }
}

export default App;
