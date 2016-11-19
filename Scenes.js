'use strict';
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import { APP_STYLES } from './utils/AppStyles';

// import SampleLogin from './containers/SampleLogin';
// import SampleRegister from './containers/SampleRegister';
// import SampleHome from './containers/SampleHome';

export const scenes = Actions.create(
  // <Scene key="root">
  //   <Scene key="login" component={SampleLogin} title="Login"/>
  //   <Scene key="register" component={SampleRegister} title="Register"/>
  //   <Scene key="home" component={SampleHome}/>
  // </Scene>
);