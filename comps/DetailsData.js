/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

export default function DetailsData(props) {
  const tableList = props.route.params.tableData
    .sort(function(a, b) {
      return a.id === b.id ? 0 : a.id < b.id ? 1 : -1;
    })
    .map((v, i) => {
      return (
        <View key={i} style={tableStyles.tableRow}>
          <View style={tableStyles.tdl}>
            <Text style={tableStyles.text}>{v.date}</Text>
          </View>
          <View style={tableStyles.td}>
            <Text style={tableStyles.text}>{v.confirmed}</Text>
          </View>
          <View style={tableStyles.td}>
            <Text style={tableStyles.text}>{v.recovered}</Text>
          </View>
          <View style={tableStyles.tdr}>
            <Text style={tableStyles.text}>{v.deaths}</Text>
          </View>
        </View>
      );
    });

  return (
    <View style={styles.scrollview}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={tableStyles.tableRow}>
            <View style={tableStyles.thl}>
              <Text style={tableStyles.text}>Дата</Text>
            </View>
            <View style={tableStyles.th}>
              <Text style={tableStyles.text}>Заражено</Text>
            </View>
            <View style={tableStyles.th}>
              <Text style={tableStyles.text}>Выздоровело</Text>
            </View>
            <View style={tableStyles.thr}>
              <Text style={tableStyles.text}>Умерло</Text>
            </View>
          </View>
          <ScrollView
            style={{
              flex: 1,
              marginBottom: 10,
              borderColor: '#265E67',
              borderWidth: 1,
            }}>
            {tableList}
          </ScrollView>
          <TouchableHighlight
            style={{...styles.openButton}}
            onPress={() => {
              props.navigation.pop();
            }}>
            <Text style={{...styles.text, fontSize: 18}}>Вернуться</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const tableStyles = StyleSheet.create({
  th: {
    justifyContent: 'center',
    padding: 5,
    fontFamily: 'Alaskan Council Socalist Republ',
    borderColor: '#265E67',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    width: '25%',
  },
  thl: {
    justifyContent: 'center',
    padding: 5,
    fontFamily: 'Alaskan Council Socalist Republ',
    borderColor: '#265E67',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    width: '25%',
  },
  thr: {
    justifyContent: 'center',
    padding: 5,
    fontFamily: 'Alaskan Council Socalist Republ',
    borderColor: '#265E67',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopRightRadius: 10,
    width: '25%',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tdl: {
    justifyContent: 'center',
    padding: 5,
    fontFamily: 'Alaskan Council Socalist Republ',
    borderColor: '#265E67',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    width: '25%',
  },
  td: {
    justifyContent: 'center',
    padding: 5,
    fontFamily: 'Alaskan Council Socalist Republ',
    borderColor: '#265E67',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 2,
    width: '25%',
  },
  tdr: {
    justifyContent: 'center',
    padding: 5,
    fontFamily: 'Alaskan Council Socalist Republ',
    borderColor: '#265E67',
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 1,
    width: '25%',
  },
  text: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Alaskan Council Socalist Republ',
  },
});
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
  text: {
    fontFamily: 'Alaskan Council Socalist Republ',
    color: '#FFF',
    fontSize: 22,
  },
});
