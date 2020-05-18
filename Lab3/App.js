import React, {useState} from 'react';
import {AppNavigation} from "./src/navigation/AppNavigation";
import {AppLoading} from "expo";
import {boot} from "./src/boot";

export default function App() {

  //Font initialize when app is loaded here
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
        <AppLoading
          startAsync={boot}
          onFinish={() => setIsReady(true)}
          onError={e => console.log(e)}
        />
    )
  }
  // Main script
  return <AppNavigation />
}
