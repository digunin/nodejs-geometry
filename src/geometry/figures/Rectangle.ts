import { GeometryComputing } from '../GeometryComputing.js';
import { Polygon } from './Polygon.js';
import { FigureEmitEventMethod } from './types.js';

export class Rectangle extends Polygon {
  protected _width = 0;
  protected _height = 0;
  constructor(computing: GeometryComputing, emitEvent: FigureEmitEventMethod, width: number, height: number) {
    width = Math.abs(width);
    height = Math.abs(height);
    super(computing, emitEvent, width, height, width, height);
    this._type = 'rectangle';
    this._width = width;
    this._height = height;
  }

  protected override _draw(): void {
    console.log(`Rectangle with height ${this._height} and width ${this._width}`);
  }

  public override _getSquare(): number {
    return this._computing.getRectangleSquare(this);
  }

  public get width() {
    return this._width;
  }

  public get height() {
    return this._height;
  }
}
