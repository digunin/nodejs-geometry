import { GeometryComputing } from '../GeometryComputing.js';
import { Figure } from './figure.js';
import { FigureEmitEventMethod } from './types.js';

export class Ellipse extends Figure {
  protected _minorRadius = 0;
  protected _majorRadius = 0;
  constructor(
    computing: GeometryComputing,
    emitEvent: FigureEmitEventMethod,
    minorRadius: number,
    majorRadius: number,
  ) {
    if (minorRadius > majorRadius) {
      [minorRadius, majorRadius] = [majorRadius, minorRadius];
    }
    super(computing, emitEvent);
    this._type = 'ellipse';
    this._minorRadius = Math.abs(minorRadius);
    this._majorRadius = Math.abs(majorRadius);
  }

  protected override _draw() {
    console.log(`Ellipse with radii ${this._minorRadius} and ${this._majorRadius}`);
  }

  public override getPerimeter(): number {
    return this._computing.getEllipsePerimeter(this);
  }
  public override _getSquare(): number {
    return this._computing.getEllipseSquare(this);
  }

  public get minorRadius() {
    return this._minorRadius;
  }

  public get majorRadius() {
    return this._majorRadius;
  }
}
