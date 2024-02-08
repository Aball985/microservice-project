import { Directive, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[widthListen]',
})
export class ElementWidthListener {
  @HostListener('', ['$event'])
  listenToElementWidth() {}
}
