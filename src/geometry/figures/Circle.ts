import { GeometryComputing } from '../GeometryComputing.js';
import { Ellipse } from './Ellipse.js';
import { FigureEmitEventMethod } from './types.js';

export class Circle extends Ellipse {
  protected _radius: number;
  constructor(computing: GeometryComputing, emitEvent: FigureEmitEventMethod, radius: number) {
    radius = Math.abs(radius);
    super(computing, emitEvent, radius, radius);
    this._type = 'circle';
    this._radius = radius;
  }

  protected override _draw(): void {
    console.log(`Circle with radius ${this._radius}`);
  }

  public get radius() {
    return this._radius;
  }

  public get diameter() {
    return this._radius * 2;
  }
}
