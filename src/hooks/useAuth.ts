import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = await firestore()
          .collection('users')
          .doc(user.uid)
          .get();
        
        const userData = userDoc.data();
        setUser({ ...user, role: userData.role });

        // Handle navigation based on role
        if (userData.role === 'student') {
          navigation.navigate('StudentHome');
        } else if (userData.role === 'faculty') {
          navigation.navigate('FacultyHome');
        }
      } else {
        setUser(null);
        navigation.navigate('Login');
      }
    });

    return unsubscribe;
  }, []);

  const signup = async (email, password, role) => {
    try {
      const { user } = await auth().createUserWithEmailAndPassword(email, password);
      await firestore().collection('users').doc(user.uid).set({
        email,
        role,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => auth().signOut();

  return { user, signup, login, logout };
};
