import { MouseCoordinatesState } from '../interfaces/mouse-coordinates.state';
// app-track-mouse-coordinates.directive.ts
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appTrackMouseCoordinates]',
})
export class TrackMouseCoordinatesDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  trackMouseCoordinates(event: MouseEvent): void {
    const trackedElement = this.el.nativeElement;
    const rect: DOMRect = trackedElement.getBoundingClientRect();

    let mouseX: number = event.clientX - rect.left;
    let mouseY: number = event.clientY - rect.top;

    // Ensure coordinates are within the element's bounds
    mouseX = Math.max(0, Math.min(mouseX, rect.width));
    mouseY = Math.max(0, Math.min(mouseY, rect.height));

    const MouseCoordinatesState: MouseCoordinatesState = {
      x: mouseX,
      y: mouseY,
    };

    // Dispatch the action to update the state
    // this.store.dispatch(FitActions.plotFitCoordinate(MouseCoordinatesState));
  }
}
