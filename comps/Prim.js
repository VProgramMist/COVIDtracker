/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Countries() {
  return (
    <ScrollView style={styles.container}>
      <WebView
        style={styles.frame}
        source={{
          uri:
            'https://datalens.yandex/r8r2cldmwff6n?56667170-2453-459b-a0ae-635d2e7fcfd2=Приморский%20край&_embedded=1&_theme=dark',
        }}
      />
      <WebView
        style={styles.frame}
        source={{
          uri:
            'https://datalens.yandex/hzvz3qeym19qd?56667170-2453-459b-a0ae-635d2e7fcfd2=Приморский%20край&_theme=dark&_embedded=1',
        }}
      />
      <WebView
        style={styles.frame}
        source={{
          uri:
            'https://datalens.yandex/asot7mpau70k6?56667170-2453-459b-a0ae-635d2e7fcfd2=Приморский%20край&_embedded=1&_theme=dark',
        }}
      />
      <WebView
        style={styles.frame}
        source={{
          uri:
            'https://datalens.yandex/tat4enfoyhhap?56667170-2453-459b-a0ae-635d2e7fcfd2=Приморский%20край&_embedded=1&_theme=dark',
        }}
      />
      <WebView
        style={styles.frame}
        source={{
          uri:
            'https://datalens.yandex/3lhm8fv5nlraz?56667170-2453-459b-a0ae-635d2e7fcfd2=Приморский%20край&_embedded=1&_theme=dark',
        }}
      />
      <WebView
        style={styles.frame}
        source={{
          uri:
            'https://datalens.yandex/cuqvlhq5yu488?56667170-2453-459b-a0ae-635d2e7fcfd2=Приморский%20край&_embedded=1&_theme=dark',
        }}
      />
      <WebView
        style={styles.table}
        source={{
          uri:
            'https://datalens.yandex/p6p0ajd3s5z6l?56667170-2453-459b-a0ae-635d2e7fcfd2=Приморский%20край&_embedded=1&_theme=dark',
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#154854',
  },
  frame: {
    height: 300,
  },
  table: {
    height: 150,
  },
});
