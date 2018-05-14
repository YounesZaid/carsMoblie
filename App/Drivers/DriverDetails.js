import React, { Component } from 'react';
import { View, Text,  } from 'react-native';

class DriverDetails extends Component {
  render() {
    const { name } = this.props;
    return (
      <View>
        <Text> Driver Details here {name}</Text>
      </View>
    );
  }
}

export default DriverDetails;
