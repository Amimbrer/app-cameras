import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native'

import { ThemedView } from '@/modules/core/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();


  return (
    <ThemedView style={[{paddingBottom: insets.bottom, paddingTop: insets.top} ,styles.container]}>
      <Text>Settings</Text>
      <Link href='prueba'>Prueba</Link>
    </ThemedView>
  )
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});



