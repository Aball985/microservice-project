import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapChevronDown } from '@ng-icons/bootstrap-icons';
import { AuthService } from '../../../services/auth/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterModule, AsyncPipe, NgIconComponent],
  viewProviders: [provideIcons({ bootstrapChevronDown })],
})
export class NavbarComponent implements OnInit {
  currentUser$!: Observable<firebase.User | null>;

  isProfileOpen: boolean = false;

  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {
    // this.afAuth
    //   .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    //   .then(() => {
    //     this.afAuth.onAuthStateChanged((user) => {
    //       this.currentUser$ = of(user);
    //     });
    //   });
  }

  ngOnInit(): void {
    this.getAuthState();
  }

  getAuthState(): void {
    // this.currentUser$ = this.store.select(selectCurrentUser);
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle();
  }

  logOut(): void {
    this.authService.signOut();
  }
}
