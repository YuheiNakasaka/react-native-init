'use strict';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Reducer } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { scenes } from './Scenes';

const reducerCreate = params=> {
  const defaultReducer = Reducer(params);
  return (state, action)=>{
    return defaultReducer(state, action);
  }
};

class App extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
      <Router createReducer={reducerCreate}  sceneStyle={styles.container} scenes={scenes} />
    );
  }

}

function mapStateToProps(state) {
  return {};
}

const styles=  StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"transparent"
  },
});

export default connect(mapStateToProps)(App);