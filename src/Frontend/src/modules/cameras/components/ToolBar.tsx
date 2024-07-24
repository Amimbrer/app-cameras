import { IconSwitch, ThemedView } from '@/modules/core/components';

type ToolBarProps = {
  value: boolean;
  toggleSwitch: () => void;
}

/**
 * Create the toolbar for cameras screen
 * @param param0 
 */
export const ToolBar = ({value, toggleSwitch}: ToolBarProps) => {

  return (
    
    <ThemedView>
        <IconSwitch 
          value={value} 
          toggleSwitch={toggleSwitch} 
          icon={{
            preIcon: 'expand', 
            nextIcon: 'contract'
          }} 
        />
    </ThemedView>
  )
}

// const styles = StyleSheet.create({});