import { useEffect, StrictMode } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context'


import { useThemeColor } from '@/modules/core/hooks';

const RootLayout = () => {

  SplashScreen.preventAutoHideAsync();

  // Importamos la fuente
  const [loaded, error] = useFonts({
    'Roboto': require('@assets/fonts/roboto/roboto-latin-400-normal.ttf')
  });

  const headerTintColor = useThemeColor('tint');
  const backgroundColor = useThemeColor('primary');

  // Ocultamos carga cuando la fuente esté cargada
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <StrictMode>
      <SafeAreaProvider >
        <Stack screenOptions={{
          headerTintColor: headerTintColor,
          headerStyle: {
            backgroundColor: backgroundColor
            }
          }}>
            <Stack.Screen name="(core)" options={{headerShown: false}} />

            <Stack.Screen name="+not-found" options={{
              headerTitle: 'Página no encontrada'
            }} 
            />
        </Stack>
      </SafeAreaProvider>
    </StrictMode>
  )
}

export default RootLayout;

