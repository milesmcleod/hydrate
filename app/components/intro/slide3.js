import React from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import {
  slideStyles
} from '../../styles/slide_styles.js';

class Slide3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={slideStyles.container}>
        <Text>Slide 3</Text>
      </View>
    );
  }
}

export default Slide3;
