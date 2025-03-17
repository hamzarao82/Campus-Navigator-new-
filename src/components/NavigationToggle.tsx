import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import { THEME } from '../config/constants';
import { NavigationMode } from '../types/navigation';

interface Props {
  mode: NavigationMode;
  onModeChange: (mode: NavigationMode) => void;
  isIndoorAvailable: boolean;
}

export const NavigationToggle: React.FC<Props> = ({
  mode,
  onModeChange,
  isIndoorAvailable
}) => {
  const isIndoor = mode === NavigationMode.INDOOR;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {isIndoor ? 'Indoor Navigation' : 'Outdoor Navigation'}
      </Text>
      <Switch
        value={isIndoor}
        onValueChange={(value) => 
          onModeChange(value ? NavigationMode.INDOOR : NavigationMode.OUTDOOR)
        }
        disabled={!isIndoorAvailable}
        trackColor={{ false: '#767577', true: THEME.colors.primary }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: THEME.spacing.md,
    backgroundColor: 'white',
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: THEME.colors.text,
  },
});
