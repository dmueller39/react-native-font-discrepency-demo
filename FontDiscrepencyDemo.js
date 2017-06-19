/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FontDiscrepencyDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.iosFontFamily}>
          Here is the font family that works on iOS. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>
        <Text style={styles.androidFontFamily}>
          Here is the font family that works on Android. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </Text>
        <Text style={styles.lineGap}>
          Here is a font family with a line gap. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>
        <Text style={styles.compatible}>
          Here is a font family that is compatible. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: 300,
  },
  iosFontFamily: {
    fontFamily: 'SecretCode',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  androidFontFamily: {
    fontFamily: 'SecretCodeAndroidName',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  lineGap: {
    fontFamily: 'SecretCodeWithLineGap',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  compatible: {
    fontFamily: 'SecretCodeCompatible',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
