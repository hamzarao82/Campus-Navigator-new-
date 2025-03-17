import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MapPin, Settings, Users, Map } from 'lucide-react';
import { THEME } from '../../config/constants';

export default function FacultyHome() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Access</Text>
          <TouchableOpacity 
            style={[styles.button, styles.primaryButton]}
            onPress={() => navigation.navigate('Navigation')}
          >
            <MapPin color={THEME.colors.primary} size={24} />
            <Text style={styles.buttonText}>Campus Navigation</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('POIManage')}
          >
            <Map color={THEME.colors.primary} size={24} />
            <Text style={styles.buttonText}>Manage POIs</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('Profile')}
          >
            <Settings color={THEME.colors.primary} size={24} />
            <Text style={styles.buttonText}>Profile Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.secondary,
  },
  content: {
    padding: THEME.spacing.md,
  },
  card: {
    backgroundColor: THEME.colors.white,
    borderRadius: THEME.borderRadius.md,
    padding: THEME.spacing.md,
    marginBottom: THEME.spacing.md,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: THEME.spacing.md,
    color: THEME.colors.text,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: THEME.spacing.md,
    borderRadius: THEME.borderRadius.md,
    marginBottom: THEME.spacing.sm,
  },
  primaryButton: {
    backgroundColor: THEME.colors.primary + '10',
  },
  secondaryButton: {
    backgroundColor: THEME.colors.secondary,
  },
  buttonText: {
    marginLeft: THEME.spacing.md,
    color: THEME.colors.primary,
    fontSize: 16,
  },
});
