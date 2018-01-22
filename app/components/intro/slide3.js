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
        <Text
          style={slideStyles.text}
          >On the next page, you can set up your own
          system of reminders that will help keep you hydrated!</Text>
          <TouchableHighlight
            style={slideStyles.button}
            onPress={() => {
              this.props.hideSlides();
              this.props.showSetup();
            }}
            >
            <Text
              style={slideStyles.text}
              >Get Started</Text>
          </TouchableHighlight>
      </View>
    );
  }
}

export default Slide3;
