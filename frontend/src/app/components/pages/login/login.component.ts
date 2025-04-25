import { Component, inject, signal, Signal } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapGoogle } from '@ng-icons/bootstrap-icons';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { Auth, user } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  viewProviders: [provideIcons({ bootstrapGoogle })],
})
export class LoginComponent {
  auth: Auth = inject(Auth);
  user$ = user(this.auth);
  emailTextInput: string = '';
  passwordTextInput: string = '';

  constructor(private _authService: AuthService, private _router: Router) {}

  loginWithGoogle(): void {
    this._authService.googleSignIn();
  }

  logInWithEmailAndPassword(): void {
    if (this.emailTextInput && this.passwordTextInput) {
      // this._authService.loginWithEmail(
      //   this.emailTextInput,
      //   this.passwordTextInput
      // );
    }
  }

  createNewUser(): void {
    if (this.emailTextInput && this.passwordTextInput) {
      // this._authService.signUp(this.emailTextInput, this.passwordTextInput);
    }
  }
}
