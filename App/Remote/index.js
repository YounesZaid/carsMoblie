import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import PureChart from 'react-native-pure-chart';

class RemoteScreen extends Component {
  render() {
    const sampleData = [30, 200, 170, 250, 10];

    return (
      <ScrollView
        contentContainerStyle={{
          // backgroundColor: colors.grey_dark,
          flex: 1,
          // alignItems: 'center',
          padding: 10,
          marginTop: 8,
          // paddingTop: 10,
        }}>
        <PureChart
          padding={10}
          width={'100%'}
          height={300}
          data={sampleData}
          type='line' />
          <Text>Ok</Text>
          <Text>Ok</Text>
          <Text>Ok</Text>
          <Text>Ok</Text>
          <Text>Ok</Text>
          <Text>Ok</Text>
          <Text>Ok</Text>
          <Text>Ok</Text>
          <Text>Ok</Text>
          <Text>Ok</Text>
      </ScrollView>
    );
  }
}

export default RemoteScreen;
