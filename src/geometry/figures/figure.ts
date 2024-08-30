import { FigureType } from '../types.js';

export abstract class Figure {
  protected _type: FigureType = 'figure';

  constructor(type: FigureType) {
    this._type = type;
  }

  protected abstract draw(): void;
  public abstract getPerimeter(): number;

  public get type() {
    return this._type;
  }
}
