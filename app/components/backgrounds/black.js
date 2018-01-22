import React from 'react';
import {
  View
} from 'react-native';
import {
  backgroundStyles
} from '../../styles/background_styles.js';

class Black extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={backgroundStyles.black}>
      </View>
    );
  }
}

export default Black;
