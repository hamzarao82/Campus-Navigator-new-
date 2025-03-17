import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../hooks/useAuth';
import StarterScreen from '../screens/StarterScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import StudentHome from '../screens/HomeScreens/StudentHome';
import FacultyHome from '../screens/HomeScreens/FacultyHome';
import AdminHome from '../screens/HomeScreens/AdminHome';
import NavigationScreen from '../screens/NavigationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { ErrorBoundary } from '../components/ErrorBoundary';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { user } = useAuth();

  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
          }}
        >
          {!user ? (
            <>
              <Stack.Screen 
                name="Starter" 
                component={StarterScreen} 
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          ) : (
            <>
              {user.role === 'student' && (
                <Stack.Screen name="StudentHome" component={StudentHome} />
              )}
              {user.role === 'faculty' && (
                <Stack.Screen name="FacultyHome" component={FacultyHome} />
              )}
              {user.role === 'admin' && (
                <Stack.Screen name="AdminHome" component={AdminHome} />
              )}
              <Stack.Screen name="Navigation" component={NavigationScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}
