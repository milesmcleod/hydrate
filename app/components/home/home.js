import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage
} from 'react-native';
import {
  mainStyles,
  initialStyles
} from '../../styles/main_styles.js';
import Initial from '../setup/setup.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let show = <Initial />;



    const setup = <Text
      style={mainStyles.welcome}
      >Initial</Text>;
    const settings = <Text
      style={mainStyles.welcome}
      >Settings</Text>;
    return (
      <View style={mainStyles.container}>
        {show}
      </View>
    );
  }
}

export default Home;
