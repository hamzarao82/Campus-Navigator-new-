import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useAuth } from '../hooks/useAuth';
import { THEME } from '../config/constants';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const { signup } = useAuth();

  const handleSignUp = async () => {
    try {
      await signup(email, password, role);
      // Navigation will be handled by AuthContext
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={role}
          onValueChange={(itemValue) => setRole(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Student" value="student" />
          <Picker.Item label="Faculty" value="faculty" />
        </Picker>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: THEME.spacing.lg,
    backgroundColor: THEME.colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: THEME.spacing.xl,
    color: THEME.colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: THEME.borderRadius.md,
    padding: THEME.spacing.md,
    marginBottom: THEME.spacing.md,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: THEME.borderRadius.md,
    marginBottom: THEME.spacing.md,
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: THEME.colors.primary,
    padding: THEME.spacing.md,
    borderRadius: THEME.borderRadius.md,
    alignItems: 'center',
  },
  buttonText: {
    color: THEME.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
