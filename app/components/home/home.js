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
  mainStyles
} from '../../styles/main_styles.js';
import SetupContainer from '../setup/setup.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: undefined
    };
    this.display = <View></View>;
  }

  componentDidMount() {
    AsyncStorage.getItem("frequency")
    .then((value) => {
      this.props.receiveFrequency(value);
      this.setState({
        frequency: value
      });
    })
    .then(() => {
      if (!this.props.frequency) {
        this.props.showSetup();
      }
    })
    .done();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.showSetup) {
      this.display = <SetupContainer />;
    } else if (this.props.showSettings) {
      this.display = <Settings />;
    } else (
      this.display = (
        <View style={mainStyles.container}>
          <Text
            style={mainStyles.welcome}
            >Current Frequency:</Text>
          <Text
            style={mainStyles.welcome}
            >{this.props.frequency}</Text>
        </View>
      )
    );
  }

  render() {
    return (
      <View style={mainStyles.container}>
        {this.display}
      </View>
    );
  }
}

export default Home;
