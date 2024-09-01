import { GeometryComputing } from '../GeometryComputing.js';
import { Polygon } from './Polygon.js';
import { FigureEmitEventMethod } from './types.js';

export class PerfectPolygon extends Polygon {
  protected _edge = 0;
  constructor(computing: GeometryComputing, emitEvent: FigureEmitEventMethod, edge: number, edgeQuantity: number) {
    edge = Math.abs(edge);
    if (edgeQuantity < 3) {
      throw new Error('Edge quantity of polygon must be atleast 3');
    }
    const [edge1, edge2, edge3, ...rest] = Array<number>(edgeQuantity).fill(edge);
    super(computing, emitEvent, edge1, edge2, edge3, ...rest);
    this._type = 'perfect polygon';
    this._edge = edge;
  }

  protected override _draw(): void {
    console.log(`${this._edges.length}-edges perfect polygon with edge size ${this._edge}`);
  }

  public override _getSquare(): number {
    return this._computing.getPerfectPolygonSquare(this);
  }

  public get edge() {
    return this._edge;
  }
}
