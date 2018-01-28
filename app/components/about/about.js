import React from 'react';
import {
  Modal,
  View,
  TouchableHighlight,
  Text,
  Image
} from 'react-native';

import Style from '../../styles/stylesheet.js';
import { aboutStyles } from '../../styles/about_styles.js';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  /*

  old text:

  Once, I stood on a table and shouted at everyone to drink
  more water. Now, there's an app for that.

  Designed and built by Miles McLeod.

  Dedicated to Dan Muro, who has more than once reminded me to stay
  hydrated during stressful situations.

  &copy; 2017 Miles McLeod

  */

  render() {
    return (
      <Modal
        transparent
        visible={this.props.show}
        style={aboutStyles.container}
        animationType={"fade"}
        >
        <View style={aboutStyles.background}></View>
        <Text
          style={aboutStyles.textTop}
          >Once, I stood on a table and shouted at everyone to drink
          more water. Now, there's an app for that.</Text>
        <Text
          style={aboutStyles.text}
          >&copy; 2017 Miles McLeod</Text>
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
