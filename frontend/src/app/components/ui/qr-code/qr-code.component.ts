import { Component, Input, OnInit } from '@angular/core';
import { QrService } from 'src/app/services/qr/qr.service';

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.scss',
})
export class QrCodeComponent implements OnInit {
  @Input({ required: true }) qrCode: string = '';
  qrImageUrl: string = '';
  constructor(private qrCodeService: QrService) {}

  ngOnInit(): void {
    this.getQrUrl();
  }

  getQrUrl(): any {
    this.qrImageUrl = this.qrCodeService.generateNewQrURL(
      this.qrCode,
      100,
      100
    );
  }
}
