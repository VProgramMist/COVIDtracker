/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsData from './DetailsData';
import BarChart from './BarChart';
const Stack = createStackNavigator();

function _Countries(props) {
  let countriesList = props.route.params.countries.sort().map((s, i) => {
    return <Picker.Item key={i} value={s} label={s} />;
  });

  const [selectedVal, setSelectedVal] = useState('Russia');
  const [data, setData] = useState(
    props.route.params.allData.Russia.map((s, i) => {
      s.id = i;
      return s;
    }),
  );
  const [width, setWidth] = useState(
    props.route.params.allData.Russia.length * 30,
  );
  let length = data.length;

  let last = data[data.length - 1];
  let prelast = data[data.length - 2];

  return (
    <View style={styles.scrollview}>
      <View style={styles.countryPicker}>
        <Picker
          selectedValue={selectedVal}
          style={{
            height: 50,
            color: 'white',
            fontFamily: 'Alaskan Council Socalist Republ',
          }}
          itemStyle={{
            color: 'white',
            fontFamily: 'Alaskan Council Socalist Republ',
          }}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedVal(itemValue);
            setData(
              props.route.params.allData[itemValue].map((s, i) => {
                s.id = i;
                return s;
              }),
            );
            setWidth(props.route.params.allData[itemValue].length * 30);
          }}>
          {countriesList}
        </Picker>
      </View>
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
              addConfirmed={last.confirmed - prelast.confirmed}
              addRecovered={last.recovered - prelast.recovered}
              addDeaths={last.deaths - prelast.deaths}
              relConfirmed={last.confirmed - last.deaths - last.recovered}
              len={length}
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
          Сейчас заражено: {last.confirmed - last.deaths - last.recovered}
        </Text>
        <Text style={{...styles.text, fontSize: 18, paddingLeft: 10}}>
          За последние сутки заразилось: {last.confirmed - prelast.confirmed}
        </Text>
        <Text style={{...styles.text, fontSize: 18, paddingLeft: 10}}>
          За последние сутки выздоровело: {last.recovered - prelast.recovered}
        </Text>
        <Text style={{...styles.text, fontSize: 18, paddingLeft: 10}}>
          За последние сутки умерло: {last.deaths - prelast.deaths}
        </Text>
      </View>
      <View style={{...styles.container, alignItems: 'center'}}>
        <TouchableHighlight
          style={styles.openButton}
          underlayColor={'#122E36'}
          onPress={() => {
            props.navigation.push('Detail', {
              tableData: data,
            });
          }}>
          <Text
            style={{
              ...styles.text,
              fontSize: 20,
            }}>
            Подробнее
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default function Countries(props) {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name={'Country'}
        component={_Countries}
        initialParams={{
          countries: props.countries,
          allData: props.allData,
        }}
      />
      <Stack.Screen name={'Detail'} component={DetailsData} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#154854',
    justifyContent: 'center',
  },
  openButton: {
    backgroundColor: '#4A848F',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'white',
    elevation: 2,
  },
  scrollview: {
    backgroundColor: '#154854',
    flex: 1,
  },
  scrollviewinner: {
    backgroundColor: '#154854',
    marginTop: 0,
    flex: 1,
  },
  countryPicker: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#1f5865',
  },
  text: {
    fontFamily: 'Alaskan Council Socalist Republ',
    color: '#FFF',
  },
});
