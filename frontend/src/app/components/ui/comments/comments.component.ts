import { Component } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrl: './comments.component.scss',
    imports: [CommentComponent]
})
export class CommentsComponent {
  comments: any[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
}
