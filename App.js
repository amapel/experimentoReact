import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Title, Button, Icon } from 'native-base';

import { StyleSheet, Text, View, TouchableHighlight  } from 'react-native';
import Screen from './app/Screen.js';
import principalScreen from './app/principalScreen.js';

const App = StackNavigator({
  principalScreen : { screen : principalScreen },
  Screen : { screen : Screen },
},{


});


export default App;
