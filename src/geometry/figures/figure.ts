import { FigureType } from '../types.js';

export abstract class Figure {
  protected _type: FigureType = 'figure';

  protected draw(): void {
    console.log('Some figure');
  }
  public abstract getPerimeter(): number;
  public abstract getSquare(): number;

  public get type() {
    return this._type;
  }
}
