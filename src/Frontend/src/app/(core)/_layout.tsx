import { Tabs } from 'expo-router';

export default function CoreLayout() {
  

  return (
    <Tabs screenOptions={{
      headerTitleAlign: 'center',
    }}>

      <Tabs.Screen name='index' options={{
        title: 'Home',
      }}/>

    </Tabs>
  )
}
