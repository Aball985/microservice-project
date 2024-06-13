import { MouseCoordinatesState } from './mouse-coordinates.state';

export interface Fits {
  id: number;
  title: string;
  createdAt: string;
  qr: string;
  points: MouseCoordinatesState[];
}
