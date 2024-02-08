import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QrService {
  private url: string = 'https://api.qrserver.com/v1/create-qr-code/';

  constructor() {}

  generateNewQrURL(url: string, qrHeight: number, qrWidth: number): string {
    return `${this.url}?data=${url}&size=${qrHeight}x${qrWidth}`;
  }
}
