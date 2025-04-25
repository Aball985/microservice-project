import { inject, Injectable, signal, Signal } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);

  async googleSignIn() {
    try {
      await signInWithPopup(this.auth, new GoogleAuthProvider());
    } catch (error) {
      console.error('Google sign-in error', error);
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Sign-out error', error);
    }
  }

  get user(): Signal<User | null> {
    return signal<User | null>(this.auth.currentUser);
  }
}
