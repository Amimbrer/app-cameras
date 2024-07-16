import { StyleSheet, } from 'react-native'
import { useCallback, useState } from 'react';

import {ThemedLink, ThemedText, ThemedView} from '@core/components'
import { FullCameras, SliderCameras, ToolBar } from '@/modules/cameras/components';

const HomeScreen = () => {
  const [fullCameras, setFullCameras] = useState(true)

  const toggleSwitch = useCallback(() => {
      setFullCameras(prevState => !prevState)
    },[]
  );
  

  return (
    
    <ThemedView style={styles.container}>
      <ToolBar value={fullCameras} setValue={toggleSwitch}/>

        { 
          fullCameras 
          ?  <FullCameras /> 
          : <SliderCameras />
        }

      <ThemedText>Cameras</ThemedText>

      <ThemedLink href='prueba'>Prueba</ThemedLink>
    </ThemedView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});