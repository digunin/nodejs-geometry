import { GeometryComputing } from '../GeometryComputing.js';
import { Polygon } from './Polygon.js';
import { FigureEmitEventMethod } from './types.js';

export class PerfectPolygon extends Polygon {
  constructor(
    computing: GeometryComputing,
    emitEvent: FigureEmitEventMethod,
    protected _edge: number,
    edgeQuantity: number,
  ) {
    if (edgeQuantity < 3) {
      throw new Error('Edge quantity of polygon must be atleast 3');
    }
    const [edge1, edge2, edge3, ...rest] = Array<number>(edgeQuantity).fill(_edge);
    super(computing, emitEvent, edge1, edge2, edge3, ...rest);
    this._type = 'perfect polygon';
  }

  override draw(): void {
    console.log(`${this._edges.length}-edges perfect polygon with edge size ${this._edge}`);
  }

  public override getSquare(): number {
    return this._computing.getPerfectPolygonSquare(this);
  }

  public get edge() {
    return this._edge;
  }
}
