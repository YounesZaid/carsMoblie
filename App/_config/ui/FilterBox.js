import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as colors from '_config/colors';

class FilterBox extends Component {
  render() {
    return (
      <View style={{
        justifyContent: 'center',
        width: 250,
        height: 150,
        backgroundColor: '#efefef',
        borderRadius: 3,
        padding: 10
      }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => {
          // dismiss modal
          this.props.onFilter('name');
        }}>
          <Icon name='ios-funnel-outline' size={20} color={colors.blue_text}/>
          <Text style={styles.textStyle}> Filter by Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => {
          // dismiss modal
          this.props.onFilter('date');
        }}>
          <Icon name='ios-funnel-outline' size={20} color={colors.blue_text}/>
          <Text style={styles.textStyle}> Filter by date</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: '400',
    // padding: 8
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#EAEAEA',
    marginBottom: 4,
  }
})

export default FilterBox;
