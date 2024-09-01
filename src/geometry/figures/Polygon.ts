import { GeometryComputing } from '../GeometryComputing.js';
import { Figure } from './figure.js';
import { FigureEmitEventMethod } from './types.js';

export class Polygon extends Figure {
  protected _edges: number[];

  constructor(
    computing: GeometryComputing,
    emitEvent: FigureEmitEventMethod,
    edge1: number,
    edge2: number,
    edge3: number,
    ...edges: number[]
  ) {
    super(computing, emitEvent);
    this._type = 'polygon';
    const allEdges = [edge1, edge2, edge3, ...edges];
    if (!this.isCorrectEdges(allEdges)) {
      throw new Error('A polygon with such edges is impossible');
    }
    this._edges = allEdges;
  }

  protected override _draw() {
    console.log(`${this._edges.length}-edges Polygon`);
  }

  public override getPerimeter(): number {
    return this._computing.getPolygonPerimeter(this);
  }

  public override _getSquare() {
    return this._computing.getPolygonSquare(this);
  }

  private isCorrectEdges(edges: number[]): boolean {
    const edgesSum = edges.reduce((edge1, edge2) => edge1 + edge2);
    for (const edge of edges) {
      if (edge >= edgesSum - edge) return false;
    }
    return true;
  }

  public get edges() {
    return [...this._edges];
  }

  public get edgeQuantity() {
    return this._edges.length;
  }
}
