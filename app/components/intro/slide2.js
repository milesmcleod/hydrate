import React from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import {
  slideStyles
} from '../../styles/slide_styles.js';

class Slide2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={slideStyles.container}>
        <Text>Slide 2</Text>
      </View>
    );
  }
}

export default Slide2;
