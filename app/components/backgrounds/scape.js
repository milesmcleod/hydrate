import React from 'react';

import {
  View,
  Image,
  Animated,
  Dimensions,
  Easing
} from 'react-native';

import {
  backgroundStyles
} from '../../styles/background_styles.js';

import Style from '../../styles/stylesheet.js';

const win = Dimensions.get('window');

class Scape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(
        Style.DEVICE_WIDTH * 2.8
      ),  // Initial value for opacity: 0
    };
  }

  componentDidMount() {
    Animated.loop(Animated.timing(
      this.state.fadeAnim,
      {
        toValue: Style.DEVICE_WIDTH * -2.8,
        duration: 300000,
        easing: Easing.linear
      }
    )).start();
  }

  render() {
    let { fadeAnim, fadeAnim2 } = this.state;
    return (
      <View style={backgroundStyles.scape}>
        <Image
          style={{position: 'absolute', left: -50, top: -50, right: 0, bottom: 0}}
          source={require('../../../assets/background_images/blue.png')}
        />
        <Animated.Image
          style={ {
            flex: 1,
            width: undefined,
            height: win.height,
            position: 'relative',
            overflow: 'visible',
            left: fadeAnim
          } }
          source={require('../../../assets/background_images/scape.png')}
        />
      </View>
    );
  }
}

export default Scape;
