import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import PureChart from 'react-native-pure-chart';

class RemoteScreen extends Component {
  render() {
    const sampleData = [30, 200, 170, 250, 10];

    return (
      <View style={{
        flex: 1,
        padding: 10
      }}>
        <PureChart
          padding={10}
          width={'100%'}
          height={300}
          data={sampleData}
          type='line' />
      </View>
    );
  }
}

export default RemoteScreen;
