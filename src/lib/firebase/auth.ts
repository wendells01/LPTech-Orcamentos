import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { auth } from '../../firebase';

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential.user, error: null };
  } catch (error: any) {
    return { data: null, error };
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error: any) {
    return { error };
  }
};

export const getSession = async () => {
  return auth.currentUser;
};

export const subscribeToAuthChanges = (
  callback: (event: string, user: User | null) => void
) => {
  return onAuthStateChanged(auth, (user) => {
    callback('SIGNED_IN', user);
  });
};
