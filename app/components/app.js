import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  AsyncStorage,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import { mainStyles } from '../styles/main_styles.js';
import HomeContainer from './home/home_container.js';
import SetupContainer from './setup/setup_container.js';
import IntervalContainer from './interval_settings/interval_container.js';
import StartContainer from './start_settings/start_container.js';
import EndContainer from './end_settings/end_container.js';
import Scape from './backgrounds/scape.js';
import Clouds from './backgrounds/clouds.js';
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
    this.state = {
      interval: undefined,
      start: undefined,
      end: undefined
    };
  }

  componentWillMount() {
    AsyncStorage.getItem("interval")
    .then((value) => {
      this.props.receiveInterval(value);
      this.setState({
        interval: value
      });
    })
    .then(() => AsyncStorage.getItem("start"))
    .then((value) => {
      this.props.receiveStart(value);
      this.setState({
        start: value
      });
    })
    .then(() => AsyncStorage.getItem("end"))
    .then((value) => {
      this.props.receiveEnd(value);
      this.setState({
        end: value
      });
    })
    .then(() => {
      if (this.state.interval) {
        this.props.showHome();
      } else {
        this.props.showSlides();
      }
    })
    .done();
  }

  render() {
    return (
      <View style={mainStyles.container}>
        <Scape />
        <Clouds />
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
