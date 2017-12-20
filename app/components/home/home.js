import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  AsyncStorage
} from 'react-native';
import {
  mainStyles
} from '../../styles/main_styles.js';
import SetupStyles from '../../styles/setup_styles.js';
import SetupContainer from '../setup/setup_container.js';
import SettingsContainer from '../settings/settings_container.js';

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
    if (newProps.setup === true) {
      this.display = <SetupContainer />;
    } else if (newProps.settings === true) {
      this.display = <SettingsContainer />;
    } else (
      this.display = (
        <View style={mainStyles.container}>
          <Text
            style={mainStyles.welcome}
            >{newProps.setup}</Text>
          <Text
            style={mainStyles.welcome}
            >Current Frequency:</Text>
          <Text
            style={mainStyles.welcome}
            >{newProps.frequency}</Text>
            <Button
              onPress={() => {
                this.props.showSettings();
              }}
              title="Edit Frequency"
              style={SetupStyles.button}
            />
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
