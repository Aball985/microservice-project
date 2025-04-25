import { Component, inject, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { MouseCoordinatesState } from '../../../interfaces/mouse-coordinates.state';
import { Observable } from 'rxjs';
import { TrackMouseCoordinatesDirective } from '../../../directives/mouse-coordinates.directive';
import {
  AsyncPipe,
  NgOptimizedImage,
  JsonPipe,
  CommonModule,
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../shared/modal/modal.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { FitSidebarComponent } from '../../ui/fit-sidebar/fit-sidebar.component';
import { QrCodeComponent } from '../../ui/qr-code/qr-code.component';
import {
  bootstrapChevronLeft,
  bootstrapChevronRight,
} from '@ng-icons/bootstrap-icons';
import { FitsComponent } from './fit/fit.component';
import { Fits } from 'src/app/interfaces/fit.interface';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-fit-view',
  templateUrl: './fit-view.component.html',
  styleUrl: './fit-view.component.scss',
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
  schemas: [],
  viewProviders: [
    provideIcons({ bootstrapChevronLeft, bootstrapChevronRight }),
  ],
})
export class FitViewComponent implements OnInit {
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

  testPoints: MouseCoordinatesState[] = [
    {
      x: 317.5,
      y: 172,
      link: '',
      // link: 'https://shopbauhaus.com/products/mlb-new-york-yankees-47-clean-up-cap-white-one-size',
    },
    // {
    //   x: 322.5,
    //   y: 412,
    //   link: 'https://www.murdochs.com/products/mens/clothing/coats-jackets/wrangler-mens-blanket-lined-western-jacket/',
    // },

    // {
    //   x: 366.5,
    //   y: 608,
    //   link: 'https://www.wrangler.com/shop/wrangler-authentics-regular-fit-comfort-waist-jeandark-stonewash3229-10ZM1CSDS%3A32%3A29.html',
    // },

    // {
    //   x: 342.5,
    //   y: 807,
    //   link: 'https://www.farfetch.com/shopping/men/vans-old-skool-sneakers-item-12174327.aspx?fsb=1&size=31&storeid=11218',
    // },

    // {
    //   x: 380.5,
    //   y: 769,
    //   link: 'https://www.amazon.com/Dickies-6-Pair-Cushion-Socks-White/dp/B00BU9T0BA/ref=sr_1_5?keywords=plain+white+socks&qid=1703571254&sr=8-5',
    // },

    // {
    //   x: 341.5,
    //   y: 223,
    //   link: 'https://www.target.com/p/safe-mate-washable-reusable-cloth-masks-kids-multi-packs-includes-filters/-/A-82040846?preselect=82040845#lnk=sametab',
    // },

    // {
    //   x: 396.5,
    //   y: 182,
    //   link: 'https://www2.hm.com/en_us/productpage.0970819007.html',
    // },
  ];
  private auth = inject(Auth); // ✅ Modular Firebase Auth

  ngOnInit(): void {
    this.handleLoadingPoints();
  }

  spinnerTest() {}

  handleLoadingPoints(): void {
    this.points = JSON.parse(JSON.stringify(this.testPoints));

    const newFit: Fits = {
      id: 0,
      title: 'Brand new Fit',
      createdAt: Date.now().toString(),
      qr: '2323233223',
      points: this.points,
    };

    this.fits.push(newFit);
  }

  logout(): void {
    // this.afAuth.signOut();
  }
}
