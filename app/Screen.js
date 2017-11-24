import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight  } from 'react-native';
import { Container, Header, Title, Button, Icon } from 'native-base';

export default class Screen extends React.Component {
  

  goToScreen(screen) {
    console.log("Go to => ", screen);
    const { navigate } = this.props.navigation;
    navigate(screen);
  }

  render() {
    return (
      <Container>
      <Header style={styles.header}>
        <Button transparent
         onPress={() => {this.goToScreen('principalScreen')}}>
            <Icon name='ios-arrow-back' />
        </Button>
        
        <Title>Coloca el titulo aqui</Title>
        
        <Button transparent >
           <Icon name='ios-home' style={{fontSize: 20, color: '#fff'}} />
            <Icon name='ios-alarm' style={{fontSize: 20, color: '#fff'}} />
             <Icon name='ios-alarm' style={{fontSize: 20, color: '#fff'}} />
        </Button>
      </Header>
      <View style={styles.conten}>
        <Text>Otro Screen</Text>

        <TouchableHighlight 
          underlayColor = 'rgba(31,219,219,0.10)'
          onPress={() => {this.goToScreen('principalScreen')}}>
              
          <View style={[styles.buttonInicio, ]}>
            
            <Text style={styles.textButtonInicio}>
             regresar
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </Container>
    );
  }
}
const styles = StyleSheet.create({
  conten: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonInicio:{
    alignItems:'center',
    borderRadius: 10,
    margin:10,
    padding:10,
    backgroundColor:'rgba(255,255,255,0.5)',
  },

});

