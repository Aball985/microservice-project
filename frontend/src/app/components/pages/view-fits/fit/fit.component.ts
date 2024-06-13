import { Component, Input, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TrackMouseCoordinatesDirective } from 'src/app/directives/mouse-coordinates.directive';
import {
  AsyncPipe,
  CommonModule,
  JsonPipe,
  NgOptimizedImage,
} from '@angular/common';
import { Store } from '@ngrx/store';
import { FitSidebarComponent } from 'src/app/components/ui/fit-sidebar/fit-sidebar.component';
import { QrCodeComponent } from 'src/app/components/ui/qr-code/qr-code.component';
import { NgIconComponent } from '@ng-icons/core';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';
import { FormsModule } from '@angular/forms';
import {
  selectCoordinates,
  selectXCoordinate,
  selectYCoordinate,
} from 'src/app/store/selectors/mouse/mouse-coordinates.selector';
import { MouseCoordinatesState } from 'src/app/interfaces/mouse-coordinates.state';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Fits } from 'src/app/interfaces/fit.interface';

@Component({
  selector: 'app-fits',
  standalone: true,
  templateUrl: './fit.component.html',
  styleUrls: ['./fit.component.scss'],
  imports: [
    TrackMouseCoordinatesDirective,
    AsyncPipe,
    FormsModule,
    NgOptimizedImage,
    JsonPipe,
    ModalComponent,
    NgIconComponent,
    CommonModule,
    FitSidebarComponent,
    QrCodeComponent,
    FitsComponent,
  ],
})
export class FitsComponent implements OnInit {
  @Input({ required: true }) Fits: Fits[] = [];
  uuid: string = crypto.randomUUID();
  x_Coord$!: Observable<number>;
  y_Coord$!: Observable<number>;
  safeUrl!: SafeResourceUrl;
  isPointsVisible: boolean = true;
  isLinkModalVisible: boolean = false;
  isCursorPointVisible: boolean = false;
  isSidebarOpen: boolean = false;
  fits: Fits[] = [];
  currentFit: number = 0;
  currentPointsLength: number = 0;
  maxNumberOfCords: number = 10;
  linkInputText: string = '';
  points: MouseCoordinatesState[] = [];

  public get anyLinksContainText(): boolean {
    return this.points.some((items) => items.link?.length);
  }

  constructor(
    private store: Store,
    private domSanitizer: DomSanitizer,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.getCoordinateStoreSelects();
    this.loadPoints();
  }

  openAllLinks(fromModal: boolean = false): void {
    this.modalService.open('openAllFitWarning');
    if (fromModal) {
      const filtered: MouseCoordinatesState[] = this.points.filter(
        (point) => point.link
      );

      this.asyncOpenAllLinks(filtered).finally(() => {
        this.closeModal();
      });
    }
  }
  async asyncOpenAllLinks(links: MouseCoordinatesState[]): Promise<void> {
    for (let i = 0; i < links.length; i++) {
      const link = links[i].link;

      await this.openLink(link);
    }
  }

  async openLink(link: string | undefined): Promise<void> {
    window.open(link, '_blank');

    return new Promise((resolve) => {
      setTimeout(() => resolve(), 750);
    });
  }

  closeModal(): void {
    this.modalService.close();
  }

  loadPoints() {
    console.log(this.Fits);
    this.points = this.Fits[0]?.points;
  }

  countPointLength(): void {
    if (this.points.length) {
      this.currentPointsLength = this.points.length;
    }
  }

  getCoordinateStoreSelects(): void {
    this.x_Coord$ = this.store.select(selectXCoordinate);
    this.y_Coord$ = this.store.select(selectYCoordinate);
  }

  clearPoints(): void {
    this.points = [];
  }

  hideAllPoints(): void {
    this.isPointsVisible = !this.isPointsVisible;
  }

  plotPoint(): void {
    this.store
      .select(selectCoordinates)
      .pipe(take(1))
      .subscribe((newPoint: MouseCoordinatesState) => {
        if (
          (newPoint.x || newPoint.y) &&
          !this.points.find((point) => point === newPoint) &&
          this.points.length < this.maxNumberOfCords
        ) {
          this.points.push(newPoint);
        }
      });
  }

  sanitizeUrl(url: string): SafeResourceUrl | undefined {
    if (url) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return;
  }

  toggleLinkModal(): void {
    this.isLinkModalVisible = !this.isLinkModalVisible;
    this.linkInputText = '';
  }

  undoLastPoint(): void {
    this.points.pop();
    this.isPointsVisible = true;
  }

  addLinkToPoint(pointIndex: number): void {
    if (this.linkInputText.length) {
      this.points[pointIndex].link = this.linkInputText;
      this.linkInputText = '';
    }
  }

  moveForwardFit(): void {
    // this.fits.push(this.currentFit++);
  }

  moveBackwardFit(): void {
    // this.currentFit = this.fits.pop() || 0;
  }
}
