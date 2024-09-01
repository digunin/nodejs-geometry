import { GeometryComputing } from '../GeometryComputing.js';
import { Figure } from './figure.js';
import { FigureEmitEventMethod } from './types.js';

export class Ellipse extends Figure {
  constructor(
    computing: GeometryComputing,
    emitEvent: FigureEmitEventMethod,
    protected _minorRadius: number,
    protected _majorRadius: number,
  ) {
    super(computing, emitEvent);
    this._type = 'ellipse';
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
