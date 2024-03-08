import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import {useFonts} from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Primaria' : require('./assets/fuentes/MadimiOne-Regular.ttf'),
    'Secundaria' : require('./assets/fuentes/PermanentMarker-Regular.ttf'),
    'Terciaria' : require('./assets/fuentes/LuckiestGuy-Regular.ttf')
  })

  if(!fontsLoaded) {return undefined}
  return (
    <Navigation/>
  );
}


