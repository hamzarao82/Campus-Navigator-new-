import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { THEME } from '../config/constants';

export const LoadingState: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={THEME.colors.primary} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.colors.background,
  },
});
