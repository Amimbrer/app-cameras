import { StyleSheet, Switch } from 'react-native';


import Ionicons from '@expo/vector-icons/Ionicons'
import {  ThemedView } from '@core/components';
import { useRef, useState } from 'react';

/**
 * Global variables
 */
const ICONSIZE = 16;
const ICONDELAY = 500;


type IconSwitchProps = {
    value: boolean;
    setValue: () => void;
}


export const IconSwitch = ({value, setValue}: IconSwitchProps) => {
    const switchRef = useRef(null)
    const [switchWidth, setSwitchWidth] = useState<number>(0)

        

    return (
        <ThemedView style={styles.container}>
            <ThemedView 
            ref={switchRef}
            style={styles.switchContainer}
            onLayout={(event) => {
                const { width } = event.nativeEvent.layout;
                setSwitchWidth(width);
            }}>
                {!value && <Ionicons name="expand" size={ICONSIZE} style={[styles.preIcon]} />}

                <Switch 
                    accessible = {true}
                    accessibilityHint='Cambia entre la vista global de las cámaras y la vista individual'
                    value={value}
                    onValueChange={setValue}
                    style={styles.switch}
                />

                {value && <Ionicons name="contract" size={ICONSIZE} style={[styles.nextIcon]} />}
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
    switch: {
        transform: [{scale: 1.2}]    
    },
    preIcon: {
        left: '10.5%',
        zIndex: 2,
        position: 'absolute'
    },
    nextIcon: {
        right: '7%',
        zIndex: 2,
        position: 'absolute'
    }
});