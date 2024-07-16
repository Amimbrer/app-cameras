import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native'

import { ThemedView } from '@/modules/core/components';

const IrritationScreen = () => {


  return (
    <ThemedView style={styles.container}>
      <Text>Irritation</Text>
      <Link href='prueba'>Prueba</Link>
    </ThemedView>
  )
}

export default IrritationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});



