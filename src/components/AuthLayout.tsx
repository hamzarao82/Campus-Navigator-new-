import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { THEME } from '../config/constants';

export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.white,
    padding: THEME.spacing.lg,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: THEME.spacing.xl,
  },
  logo: {
    width: 120,
    height: 120,
  },
});
