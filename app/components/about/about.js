import React from 'react';
import {
  Modal,
  TouchableHighlight,
  Text,
  Image
} from 'react-native';

import Stylesheet from '../../styles/stylesheet.js';
import { aboutStyles } from '../../styles/about_styles.js';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        transparent
        visible={this.props.show}
        animationType={"fade"}
        style={aboutStyles.container}
        >
        <Text
          style={aboutStyles.text}
          >A little bit about water A little bit about water A little bit
          about water</Text>
        <Text
          style={aboutStyles.text}
          >A little bit of thank yous</Text>
        <Text
          style={aboutStyles.text}
          >A little bit of copyright</Text>
        <TouchableHighlight
          onPress={() => {
            this.props.hideAbout();
            setTimeout(this.props.showHome, 300);
          }}
          style={aboutStyles.button}
          >
          <Text
            style={aboutStyles.buttonText}
            >Back</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

export default About;
