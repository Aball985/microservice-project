import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { MessageService, ToastMessageOptions } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ButtonModule,
    ToastModule,
  ],
})
export class AppComponent {
  constructor(private _prime: MessageService) {}
  title = 'ng-fitster';

  newToast() {
    this._prime.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
      life: 3000,
    } as ToastMessageOptions);
  }
}
