import { useFonts } from 'expo-font'
import { Text } from './src/components/Text'
import { Main } from './src/Main';

import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [fontsLoaded] = useFonts({
    'GeneralSans-400': require('./assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./assets/fonts/GeneralSans-Bold.otf'),
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <>
      <StatusBar style="dark" />
      <Main />
    </>
  );
}