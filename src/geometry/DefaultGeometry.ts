import { AbstractGeometry } from './AbstractGeometry.js';
import { Circle } from './figures/Circle.js';
import { Ellipse } from './figures/Ellipse.js';
import { PerfectPolygon } from './figures/PerfectPolygon.js';
import { Polygon } from './figures/Polygon.js';
import { Rectangle } from './figures/Rectangle.js';
import { Triangle } from './figures/Triangle.js';

export class DefaultGeometry extends AbstractGeometry {
  public createCircle(radius: number) {
    return new Circle(this._computing, this.listenEvent.bind(this), radius);
  }

  public createEllipse(minorRadius: number, majorRadius: number) {
    return new Ellipse(this._computing, this.listenEvent.bind(this), minorRadius, majorRadius);
  }

  public createPerfectPolygon(edge: number, quantity: number) {
    return new PerfectPolygon(this._computing, this.listenEvent.bind(this), edge, quantity);
  }

  public createPolygon(edge1: number, edge2: number, edge3: number, ...edges: number[]) {
    return new Polygon(this._computing, this.listenEvent.bind(this), edge1, edge2, edge3, ...edges);
  }

  public createRectangle(width: number, height: number) {
    return new Rectangle(this._computing, this.listenEvent.bind(this), width, height);
  }

  public createTriangle(edg1: number, edge2: number, edge3: number) {
    return new Triangle(this._computing, this.listenEvent.bind(this), edg1, edge2, edge3);
  }
}
