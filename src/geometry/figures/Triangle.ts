import { GeometryComputing } from '../GeometryComputing.js';
import { Polygon } from './Polygon.js';
import { FigureEmitEventMethod } from './types.js';

export class Triangle extends Polygon {
  constructor(
    computing: GeometryComputing,
    emitEvent: FigureEmitEventMethod,
    edg1: number,
    edge2: number,
    edge3: number,
  ) {
    super(computing, emitEvent, edg1, edge2, edge3);
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

  public override getSquare(): number {
    return this._computing.getTriangleSquare(this);
  }

  public override draw(): void {
    const [a, b, c] = this._edges;
    console.log(`Triangle with edges ${a}, ${b}, ${c}`);
  }
}
