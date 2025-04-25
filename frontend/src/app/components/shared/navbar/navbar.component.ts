import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapChevronDown } from '@ng-icons/bootstrap-icons';
import { Auth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterModule, AsyncPipe, NgIconComponent],
  viewProviders: [provideIcons({ bootstrapChevronDown })],
})
export class NavbarComponent implements OnInit {
  private authService = inject(AuthService);
  isProfileOpen: boolean = false;

  ngOnInit(): void {
    this.getAuthState();
  }

  getAuthState(): void {
    // this.currentUser$ = this.store.select(selectCurrentUser);
  }

  loginWithGoogle(): void {
    // this.authService.signInWithPopup();
  }

  logOut(): void {
    this.authService.signOut();
  }
}
