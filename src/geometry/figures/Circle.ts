import { GeometryComputing } from '../GeometryComputing.js';
import { Ellipse } from './Ellipse.js';
import { FigureEmitEventMethod } from './types.js';

export class Circle extends Ellipse {
  constructor(
    computing: GeometryComputing,
    emitEvent: FigureEmitEventMethod,
    protected _radius: number,
  ) {
    super(computing, emitEvent, _radius, _radius);
    this._type = 'circle';
  }

  public override draw(): void {
    console.log(`Circle with radius ${this._radius}`);
  }

  public get radius() {
    return this._radius;
  }

  public get diameter() {
    return this._radius * 2;
  }
}
