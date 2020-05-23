/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Alaskan Council Socalist Republ',
    color: '#FFF',
    fontSize: 28,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  header: {
    width: '100%',
    backgroundColor: '#122E36',
    color: 'white',
  },
});
