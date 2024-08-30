import { AbstractGeometry } from './AbstractGeometry.js';
import { Circle } from './figures/Circle.js';
import { Ellipse } from './figures/Ellipse.js';
import { PerfectPolygon } from './figures/PerfectPolygon.js';
import { Polygon } from './figures/Polygon.js';
import { Rectangle } from './figures/Rectangle.js';
import { Triangle } from './figures/Triangle.js';

export class DefaultGeometry extends AbstractGeometry {
  public createCircle(radius: number) {
    return new Circle(this._computing, radius);
  }

  public createEllipse(minorRadius: number, majorRadius: number) {
    return new Ellipse(this._computing, minorRadius, majorRadius);
  }

  public createPerfectPolygon(edge: number, quantity: number) {
    return new PerfectPolygon(this._computing, edge, quantity);
  }

  public createPolygon(edge1: number, edge2: number, edge3: number, ...edges: number[]) {
    return new Polygon(this._computing, edge1, edge2, edge3, ...edges);
  }

  public createRectangle(width: number, height: number) {
    return new Rectangle(this._computing, width, height);
  }

  public createTriangle(edg1: number, edge2: number, edge3: number) {
    return new Triangle(this._computing, edg1, edge2, edge3);
  }
}
