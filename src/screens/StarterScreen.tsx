import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { LoadingState } from '../components/LoadingState';
import { THEME } from '../config/constants';

export default function StarterScreen() {
  const { user } = useAuth();

  useEffect(() => {
    // Auth context will handle navigation based on user role
  }, [user]);

  return (
    <View style={styles.container}>
      <LoadingState />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },
});
