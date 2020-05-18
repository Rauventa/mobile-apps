//Boot component - for initialize fonts from expo-font lib

import * as Font from 'expo-font'

export async function boot() {
    await Font.loadAsync({
        'pacifico': require('../assets/fonts/Pacifico-Regular.ttf')
    })
}