import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapBalloonHeartFill } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-footer',
    imports: [CommonModule, NgIconComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    viewProviders: [provideIcons({ bootstrapBalloonHeartFill })]
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {}
}
