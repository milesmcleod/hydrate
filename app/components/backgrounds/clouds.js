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

const win = Dimensions.get('window');

class Black extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1170),  // Initial value for opacity: 0
    };
  }

  componentDidMount() {                    // Starts the animation
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: -1500,                   // Animate to opacity: 1 (opaque)
        duration: 100000,              // Make it take a while
        easing: Easing.linear
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim, fadeAnim2 } = this.state;
    return (
      <View style={backgroundStyles.clouds}>
        <Animated.Image
          style={ {
            flex: 1,
            width: undefined,
            height: undefined,
            position: 'relative',
            overflow: 'visible',
            left: fadeAnim
          } }
          source={require('../../../assets/background_images/clouds.png')}
        />
      </View>
    );
  }
}

export default Black;
