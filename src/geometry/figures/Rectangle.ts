import { Polygon } from './Polygon.js';

export class Rectangle extends Polygon {
  constructor(
    protected _width: number,
    protected _height: number,
  ) {
    super(_width, _height, _width, _height);
    this._type = 'rectangle';
  }

  public override draw(): void {
    console.log(`Rectangle with height ${this._height} and width ${this._width}`);
  }
}
