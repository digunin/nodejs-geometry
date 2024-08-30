import { GeometryComputing } from '../GeometryComputing.js';
import { Polygon } from './Polygon.js';

export class Triangle extends Polygon {
  constructor(computing: GeometryComputing, edg1: number, edge2: number, edge3: number) {
    super(computing, edg1, edge2, edge3);
    this._type = 'triangle';
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public getAngle(edge1: number, edge2: number): number {
    return -1;
  }

  public get angles(): number[] {
    const angle1 = this.getAngle(this._edges[0], this._edges[1]);
    const angle2 = this.getAngle(this._edges[2], this._edges[1]);
    const angle3 = this.getAngle(this._edges[2], this._edges[0]);
    return [angle1, angle2, angle3];
  }
}
