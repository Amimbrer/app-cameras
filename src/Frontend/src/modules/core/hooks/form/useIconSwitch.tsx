import { Easing } from 'react-native';
import { withTiming, useSharedValue, useAnimatedProps, useAnimatedStyle } from 'react-native-reanimated';
import { DefaultStyle } from 'react-native-reanimated/lib/typescript/reanimated2/hook/commonTypes';

/**
 * Return type of the hook
 * animatedStyles: animations styles to move the icon when the switch changes
 * toggleSwitch: evento 
 */
type ReturnType = {
    animatedStyles: DefaultStyle;
    onSwitchChange: (newValue: boolean) => void;
}

export const useIconSwitch = (toggleSwitch: () => void): ReturnType => {
    const posX = useSharedValue<number>(0);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{translateX: posX.value}]
    }));


    const onSwitchChange = (newValue: boolean) => {

        // When the switch pass to be active
        if(newValue){
            posX.value = withTiming(10, {
                duration: 1000,
                easing: Easing.linear
            });
        } else {
            // When the switch pass to be inactive
             posX.value = withTiming(-10, {
                duration: 1000,
                easing: Easing.linear
            });
        }

        toggleSwitch()
    }

    return {
        animatedStyles,
        onSwitchChange
    }
}
