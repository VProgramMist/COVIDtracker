/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Loader from './comps/Loader';
import Header from './comps/Head';
import World from './comps/World';
import Prim from './comps/Prim';
import Countries from './comps/Countries';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

class App extends Component {
  state = {
    countries: Loader,
    world: Loader,
    prim: Loader,
    data: {
      countriesList: null,
      allData: null,
    },
  };

  urls = {
    allCData: 'https://pomber.github.io/covid19/timeseries.json',
  };

  constructor() {
    super();
  }
  componentDidMount() {
    this.getData();
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState();
  }

  async getData() {
    let allData = await fetch(this.urls.allCData);
    allData = await allData.json();
    let countries = Object.keys(allData);

    this.setState({
      countries: Countries,
      world: World,
      prim: Prim,
      data: {
        countriesList: countries,
        allData: allData,
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'#122E36'} />
        <Header title={'COVID tracker'} />
        <NavigationContainer>
          <Tab.Navigator tabBarOptions={navigatorStyle} swipeEnabled={false}>
            <Tab.Screen
              name="По странам"
              component={() => {
                return this.state.countries({
                  countries: this.state.data.countriesList,
                  allData: this.state.data.allData,
                });
              }}
            />
            <Tab.Screen
              name="По миру"
              component={() => {
                return this.state.world({
                  allData: this.state.data.allData,
                });
              }}
            />
            <Tab.Screen name="По Приморью" component={this.state.prim} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A4C57',
  },
  text: {
    fontFamily: 'Alaskan Council Socalist Republ',
    color: '#FFF',
    fontSize: 42,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

const navigatorStyle = {
  indicatorStyle: {
    backgroundColor: '#154854',
    height: '100%',
  },
  style: {
    backgroundColor: '#122E36',
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  labelStyle: {
    fontFamily: 'Alaskan Council Socalist Republ',
    color: 'white',
    fontSize: 14,
    margin: 0,
    padding: 0,
  },
};

export default App;
