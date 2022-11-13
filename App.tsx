import { StatusBar } from 'expo-status-bar';
;import { SafeAreaProvider } from 'react-native-safe-area-context'
import { withExpoSnack } from 'nativewind';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';


const App=()=> {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const environment = process.env.NODE_ENV
  console.log(environment)
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
     
      <SafeAreaProvider>
       <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider> 
    );
  }
}
export default withExpoSnack(App);
/* <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider> */