import { Circle } from './figures/Circle.js';
import { Ellipse } from './figures/Ellipse.js';
import { Figure } from './figures/figure.js';
import { PerfectPolygon } from './figures/PerfectPolygon.js';
import { Polygon } from './figures/Polygon.js';
import { Rectangle } from './figures/Rectangle.js';
import { Triangle } from './figures/Triangle.js';
import { GeometryComputing } from './GeometryComputing.js';
import { FigureEventType } from './figures/types.js';
import { IPublisher } from '../events/IPublisher.js';

export abstract class AbstractGeometry extends IPublisher<FigureEventType, Figure> {
  constructor(protected _computing: GeometryComputing) {
    super({ startdrawing: [], finishdrawing: [] });
  }
  public abstract createCircle(radius: number): Circle;
  public abstract createEllipse(minorRadius: number, majorRadius: number): Ellipse;
  public abstract createPerfectPolygon(edge: number, quantity: number): PerfectPolygon;
  public abstract createPolygon(edge1: number, edge2: number, edge3: number, ...edges: number[]): Polygon;
  public abstract createRectangle(width: number, height: number): Rectangle;
  public abstract createTriangle(edg1: number, edge2: number, edge3: number): Triangle;
}
