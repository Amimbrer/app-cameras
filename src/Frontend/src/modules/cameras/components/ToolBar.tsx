import { IconSwitch, ThemedView } from '@/modules/core/components';

type ToolBarProps = {
  value: boolean;
  setValue: () => void;
}

/**
 * Create the toolbar for cameras screen
 * @param param0 
 */
export const ToolBar = ({value, setValue}: ToolBarProps) => {

  return (
    <ThemedView>
        <IconSwitch value={value} setValue={setValue} />
    </ThemedView>
  )
}

// const styles = StyleSheet.create({});