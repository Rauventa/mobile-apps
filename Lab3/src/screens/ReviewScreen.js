import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import * as MediaLibrary from 'expo-media-library';

export const ReviewScreen = ({navigation}) => {

  const image = navigation.state.params.image;

  const goBack = () => {
      navigation.navigate('Intro')
  };
  const saveToLib = async () => {
      await MediaLibrary.createAssetAsync(image);
      Alert.alert('Photo successfully added to camera roll')
  };

  return (
      <View style={styles.container}>
          <Text style={styles.reviewText}>Review your photo</Text>
          <Image source={{uri: image}} style={styles.currentImage} />
          <View style={styles.buttonsGroup}>
              <TouchableOpacity
                  style={styles.goButton}
                  onPress={goBack}
              >
                  <Text style={styles.goButtonText}>Take new photo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.goButton}
                  onPress={saveToLib}
              >
                  <Text style={styles.goButtonText}>Save photo</Text>
              </TouchableOpacity>
          </View>
      </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    reviewText: {
        fontSize: 32,
        fontFamily: 'pacifico',
    },
    currentImage: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain'
    },
    buttonsGroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    goButton: {
        backgroundColor: 'transparent',
        padding: 20,
        width: '50%'
    },
    goButtonText: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

