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
          <TouchableHighlight
            style={slideStyles.button}
            onPress={() => {
              this.props.hideSlides();
              this.props.showHome();
            }}
            >
            <Text
              style={slideStyles.text}
              >Done!</Text>
          </TouchableHighlight>
      </View>
    );
  }
}

export default Slide3;
