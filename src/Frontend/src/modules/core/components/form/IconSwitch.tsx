import { StyleSheet, Switch } from 'react-native';


import Ionicons  from '@expo/vector-icons/Ionicons'
import {  ThemedView } from '@core/components';
import Animated from 'react-native-reanimated';
import { useIconSwitch } from '../../hooks/form';

/**
 * Global variables
 */
const iconSize = 14;

type Icon = {
    preIcon: keyof typeof Ionicons.glyphMap;
    nextIcon: keyof typeof Ionicons.glyphMap;
}


type IconSwitchProps = {
    value: boolean;
    toggleSwitch: () => void;
    icon?: Icon
}

/**
 * Create a switch component with a custom prev o next icon
 * @param param0 
 */
export const IconSwitch = ({value, toggleSwitch, icon}: IconSwitchProps) => {
    const {animatedStyles, onSwitchChange} = useIconSwitch(toggleSwitch);



    return (
        <ThemedView style={styles.container}>
            <ThemedView 
            style={styles.switchContainer}>
                
                <Animated.View style={[styles.icon, animatedStyles]}>
                    {
                        icon && 
                        <Ionicons 
                            name={
                                !value ? icon.preIcon : icon.nextIcon
                            } 
                            size={iconSize}  
                        />
                    }
                </Animated.View>

                <Switch 
                    accessible = {true}
                    accessibilityHint='Cambia entre la vista global de las cámaras y la vista individual'
                    value={value}
                    onValueChange={onSwitchChange}
                />
            </ThemedView>
        </ThemedView>
    )
}

export default IconSwitch

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginHorizontal: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    switchContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
    },
    icon: {
        zIndex: 2,
        position: 'absolute'
    }
});