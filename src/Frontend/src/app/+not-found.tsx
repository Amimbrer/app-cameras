import { StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";

import { ThemedView, ThemedText } from '@/modules/core/components';
import { useRouter } from 'expo-router';

export default function NotFoundScreen() {
const router = useRouter();

  const onPress = () => {
    router.back()
  }
  return (
      <ThemedView style={styles.container}>
        <ThemedView  style={styles.text}>
          <Ionicons size={16} name="alert-circle-outline" accessible={false} />
          <ThemedText>
              ¡Esta pantalla no existe!
          </ThemedText>
        </ThemedView>
        <ThemedText onPress={onPress} themeColor='primary'> Volver a la APP </ThemedText>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    gap: 20  
  },
  text: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  }
})