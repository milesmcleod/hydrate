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

class Scape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1170),  // Initial value for opacity: 0
    };
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: -1500,                   // Animate to opacity: 1 (opaque)
        duration: 300000,              // Make it take a while
        easing: Easing.linear
      }
    ).start();                        // Starts the animation                      // Starts the animation
  }

  render() {
    let { fadeAnim, fadeAnim2 } = this.state;
    return (
      <View style={backgroundStyles.scape}>
        <Image
          style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}
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
