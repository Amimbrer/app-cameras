import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { ThemedView } from '@/modules/core/components/ThemedView';


const RootLayout:React.FC = () => {

  SplashScreen.preventAutoHideAsync();

  // Importamos la fuente
  const [loaded, error] = useFonts({
    'Roboto': require('@assets/fonts/roboto/roboto-latin-400-normal.ttf')
  });

  // Ocultamos carga cuando la fuente esté cargada
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  

  // 
  if (!loaded && !error) {
    return null;
  }


  return (
    <SafeAreaProvider>
      <ThemedView>
        <Stack>
            <Stack.Screen name="(core)" options={{headerShown: false}} />

            <Stack.Screen name="+not-found" options={{
              title: 'Página no encontrada',
              headerTitle: 'Prueba'
            }} 
            />
        </Stack>
      </ThemedView>
    </SafeAreaProvider>
  )
}

export default RootLayout;