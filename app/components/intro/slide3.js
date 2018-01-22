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
        <View style={slideStyles.backgroundView}></View>
        <Text
          style={slideStyles.text2}
          >On the next page, you can set up your own
          system of reminders that will help keep you hydrated.
          {'\n'}{'\n'}&#8595;</Text>
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
