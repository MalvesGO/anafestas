import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import { Container, StyleProvider, Stack } from 'native-base';
import { Router, Scene } from 'react-native-router-flux'


import AppHeader from './src/components/appHeader';
import AppBody from './src/components/appBody';
import AppFooter from './src/components/appFooter';

import Iluminacao from './src/components/pages/iluminacao';
import Consumo from './src/components/pages/consumo';
import Security from './src/components/pages/security';



export default class MyProject extends Component {
   render() {
      return (
         <Container>

            <Router>
               <Stack key='root' component={AppBody}>
               <Scene key="home" component={AppBody} title='Home'></Scene>
               <Scene key="iluminacao" component={Iluminacao} title='Iluminação'></Scene>
               <Scene key="consumo" component={Consumo} title='Consumo Elétrico'></Scene>
               <Scene key="seguranca" component={Security} title='Segurança'></Scene>
               </Stack>
            </Router>
            <AppFooter />
         </Container>
      );
   }
}

AppRegistry.registerComponent('MyProject', () => MyProject);