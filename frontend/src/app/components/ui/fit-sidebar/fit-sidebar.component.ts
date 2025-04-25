import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  bootstrapArrowBarLeft,
  bootstrapArrowBarRight,
} from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { CommentsComponent } from '../comments/comments.component';

@Component({
    selector: 'app-fit-sidebar',
    templateUrl: './fit-sidebar.component.html',
    styleUrl: './fit-sidebar.component.scss',
    viewProviders: [
        provideIcons({ bootstrapArrowBarLeft, bootstrapArrowBarRight }),
    ],
    imports: [CommonModule, NgIconComponent, CommentsComponent]
})
export class FitSidebarComponent {
  @Input() sidebarToggleStatus: boolean = false;

  toggleSidebar() {
    this.sidebarToggleStatus = !this.sidebarToggleStatus;
  }
}
