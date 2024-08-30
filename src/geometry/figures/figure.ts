import { GeometryComputing } from '../GeometryComputing.js';
import { FigureType } from '../types.js';

export abstract class Figure {
  protected _type: FigureType = 'figure';

  constructor(protected _computing: GeometryComputing) {}

  protected draw(): void {
    console.log('Some figure');
  }
  public abstract getPerimeter(): number;
  public abstract getSquare(): number;

  public get type() {
    return this._type;
  }
}
