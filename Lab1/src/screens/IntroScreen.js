import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export const IntroScreen = ({navigation}) => {

  const goToGame = () => {
      navigation.navigate('Game')
  };

  return (
      <View style={styles.container}>
          <Text style={styles.text}>Dice Game</Text>
          <TouchableOpacity
              style={styles.goButton}
              onPress={goToGame}
          >
              <Text style={styles.goButtonText}>Let's Play</Text>
          </TouchableOpacity>
      </View>
  )
};

IntroScreen.navigationOptions = {
    headerTitle: 'New game'
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#5867dd',

   },
   text: {
       color: '#fff',
       fontSize: 24
   },
   goButton: {
       backgroundColor: '#fff',
       borderRadius: 100,
       padding: 10,
       width: '30%',
       marginTop: 10
   },
   goButtonText: {
       color: '#5867dd',
       textAlign: 'center'
   }
});