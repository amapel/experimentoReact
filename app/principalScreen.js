import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight  } from 'react-native';

export default class principalScreen extends React.Component {
  
  goToScreen(screen) {
    console.log("Go to => ", screen);
    const { navigate } = this.props.navigation;
    navigate(screen);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <TouchableHighlight 
          underlayColor = 'rgba(31,219,219,0.10)'
          onPress={() => {this.goToScreen('Screen')}}>
              
          <View style={[styles.buttonInicio, ]}>
            
            <Text style={styles.textButtonInicio}>
              Buscar Tarjetas
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonInicio:{
    alignItems:'center',
    borderRadius: 10,
    margin:10,
    padding:10,
    backgroundColor:'rgba(255,255,255,0.5)',
  },

 });


//export default principalScreen;
