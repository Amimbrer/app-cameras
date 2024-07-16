import { StrictMode } from "react";
import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useThemeColor } from "@/modules/core/hooks";
import { getTextTypeStyle } from "@/modules/core/services";

const CoreLayout = () => {
    const primaryColor = useThemeColor('primary');
    const inactiveColor = useThemeColor('inactive');

  return (
    <StrictMode>
        <Tabs screenOptions={{
                headerTintColor: useThemeColor('tint'),
                headerStyle: {
                    backgroundColor: primaryColor
                },
                headerTitleAlign: 'center',
                tabBarActiveTintColor: primaryColor,
                tabBarInactiveTintColor: inactiveColor, 
                tabBarLabelStyle: {
                    bottom: 15,
                    ...getTextTypeStyle('default')
                },
                tabBarStyle: {
                    elevation: 8,
                    shadowColor: useThemeColor('shadow'),
                    backgroundColor: '#ffff',
                    position: 'absolute',
                    bottom: 25,
                    left: 90,
                    right:90,
                    paddingHorizontal: 20,
                    borderRadius: 15,
                    height: 75,
                },
                tabBarHideOnKeyboard: true,
            }}>


                <Tabs.Screen name="index" options={{
                        title: 'Cámaras',
                        tabBarIcon: (props) =>  {
                            return (<Ionicons name="camera" {...props} /> );
                        }
                    }}
                />

                <Tabs.Screen name="settings" 
                    options={{
                            headerTitle: 'Configuración',
                            tabBarLabelStyle: {
                                display: "none"
                            },
                            tabBarItemStyle: {
                                top: -20,
                                maxWidth: 50,
                                height: 59,
                                borderRadius: 50,
                                borderWidth: 0
                            },
                            tabBarIcon: (props) =>  {
                                props = {
                                    ...props,
                                    color: primaryColor,
                                    size: 55
                                }
                                return (<Ionicons name="add-circle"  {...props} style={styles.settingsIcon} /> );
                            }
                        }
                    }
                />

                <Tabs.Screen name="irritation" 
                    options={{
                        title: 'Riego',
                            tabBarIcon: (props) =>  {
                                return (<Ionicons name="water" {...props} /> );
                            }
                    }}
                />
        </Tabs>
   </StrictMode>
  )
}

export default CoreLayout

const styles = StyleSheet.create({
    settingsIcon: {
       textAlign: 'center'
    }
});