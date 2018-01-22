import React from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import {
  slideStyles
} from '../../styles/slide_styles.js';

class Slide1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={slideStyles.container}>
        <Text
          style={slideStyles.text}
          >Hi! Welcome to Hydrate.</Text>
      </View>
    );
  }
}

export default Slide1;
