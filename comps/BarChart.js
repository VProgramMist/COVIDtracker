/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {StackedBarChart, XAxis} from 'react-native-svg-charts';
import Tooltip from './Tooltips';
import * as scale from 'd3-scale';
import {Rect} from 'react-native-svg';

export default function BarChart(props) {
  let data = props.barData.sort(function(a, b) {
    return a.id === b.id ? 0 : a.id > b.id ? 1 : -1;
  });
  let len = props.len;

  let height =
    data[len - 1].confirmed + data[len - 1].deaths + data[len - 1].recovered;

  const [tooltipState, setTooltip] = useState({
    tooltipConfirmed: null,
    tooltipDeaths: null,
    tooltipRecovered: null,
    tooltipX: null,
    tooltipY: null,
    tooltipIndex: null,
  });

  const ChartPoints = ({x, y}) =>
    data.map((item, index) => (
      <Rect
        key={index}
        x={x(index)}
        y={y(height)}
        width={28}
        height={'100%'}
        r={6}
        stroke={'none'}
        fill="none"
        onPress={() => {
          setTooltip({
            tooltipX: index,
            tooltipY: item.confirmed + item.deaths + item.recovered,
            tooltipHight: height,
            tooltipConfirmed: item.confirmed,
            tooltipDeaths: item.deaths,
            tooltipRecovered: item.recovered,
            tooltipIndex: index,
          });
        }}
      />
    ));

  return (
    <View style={{flex: 1}}>
      <StackedBarChart
        style={{flex: 1, width: props.width}}
        keys={['deaths', 'recovered', 'confirmed']}
        colors={['#FF6633', '#00B7B3', '#017BB8']}
        data={data}
        xAccessor={({item}) => item.date}
        contentInset={{top: 30, bottom: 5, left: 30, right: 30}}>
        <ChartPoints />
        <Tooltip
          tooltipX={tooltipState.tooltipX}
          tooltipY={tooltipState.tooltipY}
          tooltipHight={height}
          tooltipConfirmed={tooltipState.tooltipConfirmed}
          tooltipDeaths={tooltipState.tooltipDeaths}
          tooltipRecovered={tooltipState.tooltipRecovered}
          color="#003F5A"
          index={tooltipState.tooltipIndex}
          dataLength={data.length}
        />
      </StackedBarChart>
      <XAxis
        data={data}
        style={{marginHorizontal: -15, height: 65}}
        formatLabel={value => data[value].date}
        scale={scale.scaleTime}
        contentInset={{top: 0, bottom: 5, left: 50, right: 35}}
        svg={{
          fontSize: 16,
          fill: 'white',
          fontFamily: 'Alaskan Council Socalist Republ',
          rotation: 60,
          originY: 30,
          y: 25,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#154854',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Alaskan Council Socalist Republ',
    color: '#FFF',
  },
});
