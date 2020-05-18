import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert, Image} from "react-native";
import * as ImagePicker from 'expo-image-picker'
import * as Permission from 'expo-permissions'

export const IntroScreen = ({navigation}) => {

    const bgImage = { uri: "https://i.pinimg.com/564x/79/f3/5b/79f35b9554ff3e82a10b4ec77c6c4e5b.jpg" };

    async function askForPermission() {
        //Записываем статус в обьект из функции
        const {status} = await Permission.askAsync(
            Permission.CAMERA,
            Permission.CAMERA_ROLL
        );
        // Делаем проверку на права
        if (status !== 'granted') {
            Alert.alert('Error! You cant get rules for the app!');
            return false
        }
        return true
    }

    const takePhotoHandler = async () => {
        //В методе мы вызываем старую функцию, если нам дали права, и записываем в константу
        const hasPermissions = await askForPermission();

        //Если нету прав  - функция выполняться не будет и просто выкинет return
        if (!hasPermissions) {
            return
        }

        const img = await ImagePicker.launchCameraAsync({
            //quality - качество, editing - редактор, aspect - разрешение
            quality: 0.7,
            allowsEditing: true,
            aspect: [3, 4]
        });

        navigation.navigate('Review', {image: img.uri})
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={bgImage} style={styles.bgImage}>
                <Text style={styles.text}>Simple photo editor</Text>
                <TouchableOpacity
                    style={styles.goButton}
                    onPress={takePhotoHandler}
                >
                    <Text style={styles.goButtonText}>Let's take a picture</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    bgImage: {
        flex: 1,
        width: '100%',
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 32,
        fontFamily: 'pacifico',
    },
    goButton: {
        backgroundColor: 'transparent',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff',
        padding: 10,
        width: '50%',
        marginTop: 20
    },
    goButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});