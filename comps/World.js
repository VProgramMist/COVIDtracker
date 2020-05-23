/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {StackedBarChart, XAxis} from 'react-native-svg-charts';
import Tooltip from './Tooltips';
import * as scale from 'd3-scale';
import {Rect} from 'react-native-svg';
import BarChart from './BarChart';

export default function World(props) {
  let allConfirmed = 0;
  let allRecovered = 0;
  let allDeaths = 0;

  let addConfirmed = 0;
  let addRecovered = 0;
  let addDeaths = 0;

  let relConfirmed = 0;

  let data = [];
  let start = true;
  let len = props.allData.Russia.length;

  let width = len * 30;

  for (let key in props.allData) {
    props.allData[key].map((v, i) => {
      allConfirmed += v.confirmed;
      allRecovered += v.recovered;
      allDeaths += v.deaths;
      if (start) {
        data.push({
          date: v.date,
          confirmed: v.confirmed,
          recovered: v.recovered,
          deaths: v.deaths,
        });
      } else {
        data[i].confirmed += v.confirmed;
        data[i].recovered += v.recovered;
        data[i].deaths += v.deaths;
      }
    });
    start = false;
    console.log(data);

    addConfirmed +=
      props.allData[key][len - 1].confirmed -
      props.allData[key][len - 2].confirmed;

    addRecovered +=
      props.allData[key][len - 1].recovered -
      props.allData[key][len - 2].recovered;

    addDeaths +=
      props.allData[key][len - 1].deaths - props.allData[key][len - 2].deaths;

    relConfirmed +=
      props.allData[key][len - 1].confirmed -
      props.allData[key][len - 1].recovered -
      props.allData[key][len - 1].deaths;
  }

  let height =
    data[len - 1].confirmed + data[len - 1].deaths + data[len - 1].recovered;

  return (
    <View style={styles.container}>
      <View style={{flex: 4}}>
        <ScrollView
          horizontal={true}
          style={styles.scrollviewinner}
          ref={ref => {
            this.scrollView = ref;
          }}
          onContentSizeChange={() =>
            this.scrollView.scrollToEnd({animated: false})
          }>
          <View>
            <BarChart
              width={width}
              barData={data}
              addConfirmed={addConfirmed}
              addRecovered={addRecovered}
              addDeaths={addDeaths}
              relConfirmed={relConfirmed}
              len={len}
            />
          </View>
        </ScrollView>
      </View>
      <View style={{...styles.container, flex: 2}}>
        <Text
          style={{
            ...styles.text,
            fontSize: 18,
            paddingLeft: 10,
            color: '#FF6633',
          }}>
          Сейчас заражено: {relConfirmed}
        </Text>
        <Text style={{...styles.text, fontSize: 18, paddingLeft: 10}}>
          За последние сутки заразилось: {addConfirmed}
        </Text>
        <Text style={{...styles.text, fontSize: 18, paddingLeft: 10}}>
          За последние сутки выздоровело: {addRecovered}
        </Text>
        <Text style={{...styles.text, fontSize: 18, paddingLeft: 10}}>
          За последние сутки умерло: {addDeaths}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#154854',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Alaskan Council Socalist Republ',
    color: '#FFF',
  },
});
