import { Component } from '@angular/core';
import { bootstrapHeart, bootstrapHeartFill } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
  viewProviders: [provideIcons({ bootstrapHeart, bootstrapHeartFill })],
})
export class CommentComponent {}
