import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { User } from '../types/auth';

export class AuthService {
  static async signIn(email: string, password: string): Promise<User> {
    try {
      const credential = await auth().signInWithEmailAndPassword(email, password);
      const userData = await firestore()
        .collection('users')
        .doc(credential.user.uid)
        .get();
      
      return userData.data() as User;
    } catch (error) {
      console.error('Sign in failed:', error);
      throw error;
    }
  }

  static async signOut(): Promise<void> {
    try {
      await auth().signOut();
    } catch (error) {
      console.error('Sign out failed:', error);
      throw error;
    }
  }

  static async resetPassword(email: string): Promise<void> {
    try {
      await auth().sendPasswordResetEmail(email);
    } catch (error) {
      console.error('Password reset failed:', error);
      throw error;
    }
  }

  static async updateUserProfile(userId: string, data: Partial<User>): Promise<void> {
    try {
      await firestore()
        .collection('users')
        .doc(userId)
        .update(data);
    } catch (error) {
      console.error('Profile update failed:', error);
      throw error;
    }
  }
}
