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
          ></Text>
        <Text
          style={aboutStyles.text}
          ></Text>
        <Text
          style={aboutStyles.text}
          ></Text>
        <TouchableHighlight
          onPress={() => {
            this.props.hideAbout();
            this.props.showHome();
          }}
          style={aboutStyles.button}
          >
          <Text
            style={aboutStyles.buttonText}
            ></Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

export default About;
