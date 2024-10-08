import { GeometryComputing } from '../GeometryComputing.js';
import { Polygon } from './Polygon.js';
import { FigureEmitEventMethod } from './types.js';

export class Triangle extends Polygon {
  constructor(
    computing: GeometryComputing,
    emitEvent: FigureEmitEventMethod,
    edge1: number,
    edge2: number,
    edge3: number,
  ) {
    edge1 = Math.abs(edge1);
    edge2 = Math.abs(edge2);
    edge3 = Math.abs(edge3);
    super(computing, emitEvent, edge1, edge2, edge3);
    this._type = 'triangle';
  }

  public getAngle(edge1: number, edge2: number): number {
    return this._computing.getAngleBetweenTriangleEdges(edge1, edge2, this);
  }

  public get angles(): number[] {
    const angle1 = this.getAngle(this._edges[0], this._edges[1]);
    const angle2 = this.getAngle(this._edges[2], this._edges[1]);
    const angle3 = this.getAngle(this._edges[2], this._edges[0]);
    return [angle1, angle2, angle3];
  }

  public override _getSquare(): number {
    return this._computing.getTriangleSquare(this);
  }

  protected override _draw(): void {
    const [a, b, c] = this._edges;
    console.log(`Triangle with edges ${a}, ${b}, ${c}`);
  }
}
