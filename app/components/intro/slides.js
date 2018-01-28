import React from 'react';
import PushNotificationIOS from 'react-native/Libraries/PushNotificationIOS/PushNotificationIOS.js';

import {
  Text,
  Modal,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';

import Slide1 from './slide1.js';
import Slide2 from './slide2.js';
import Slide3 from './slide3.js';

class Slides extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    PushNotificationIOS.requestPermissions();
  }

  render() {
    return (
      <Modal
        transparent
        animationType={"fade"}
        visible={this.props.show}>
        <Swiper
          showsButtons={false}
          loop={false}
          activeDotStyle={{
            width: 12, height: 12,borderRadius: 6,
            marginTop: 6, marginBottom: 6
          }}
          activeDotColor={'rgba(255, 255, 255, 0.98)'}
          dotColor={'rgba(219, 219, 219, 0.8)'}
          >
          <Slide1 />
          <Slide2 />
          <Slide3
            showSetup={this.props.showSetup}
            hideSlides={this.props.hideSlides}
            />
        </Swiper>
      </Modal>
    );
  }
}

export default Slides;
