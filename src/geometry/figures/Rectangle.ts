import { GeometryComputing } from '../GeometryComputing.js';
import { Polygon } from './Polygon.js';
import { FigureEmitEventMethod } from './types.js';

export class Rectangle extends Polygon {
  constructor(
    computing: GeometryComputing,
    emitEvent: FigureEmitEventMethod,
    protected _width: number,
    protected _height: number,
  ) {
    super(computing, emitEvent, _width, _height, _width, _height);
    this._type = 'rectangle';
  }

  protected override _draw(): void {
    console.log(`Rectangle with height ${this._height} and width ${this._width}`);
  }

  public override getSquare(): number {
    return this._computing.getRectangleSquare(this);
  }

  public get width() {
    return this._width;
  }

  public get height() {
    return this._height;
  }
}
