import { GeometryComputing } from '../GeometryComputing.js';
import { Figure } from './figure.js';

export class Polygon extends Figure {
  protected _edges: number[];

  constructor(computing: GeometryComputing, edge1: number, edge2: number, edge3: number, ...edges: number[]) {
    super(computing);
    this._type = 'polygon';
    const allEdges = [edge1, edge2, edge3, ...edges];
    if (!this.isCorrectEdges(allEdges)) {
      throw new Error('A polygon with such edges is impossible');
    }
    this._edges = allEdges;
  }

  public override draw() {
    console.log(`${this._edges.length}-edges Polygon`);
  }

  public override getPerimeter(): number {
    return -1;
  }

  public override getSquare(): number {
    return -1;
  }

  private isCorrectEdges(edges: number[]): boolean {
    const edgesSum = edges.reduce((edge1, edge2) => edge1 + edge2);
    for (const edge of edges) {
      if (edge >= edgesSum - edge) return false;
    }
    return true;
  }
}
