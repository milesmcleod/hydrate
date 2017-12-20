import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { mainStyles } from '../styles/main.js';

class Initial extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>How much times?</Text>
        <TextInput></TextInput>
      </View>
    );
  }
}

export default Initial;
