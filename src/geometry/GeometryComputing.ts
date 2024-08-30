import { Ellipse } from './figures/Ellipse.js';
import { PerfectPolygon } from './figures/PerfectPolygon.js';
import { Polygon } from './figures/Polygon.js';
import { Rectangle } from './figures/Rectangle.js';
import { Triangle } from './figures/Triangle.js';

export abstract class GeometryComputing {
  public abstract getPolygonPerimeter(polygon: Polygon): number;
  public abstract getEllipsePerimeter(ellipse: Ellipse): number;

  public abstract getPolygonSquare(polygon: Polygon): number;
  public abstract getEllipseSquare(ellipse: Ellipse): number;
  public abstract getPerfectPolygonSquare(perfectPolygon: PerfectPolygon): number;
  public abstract getRectangleSquare(rect: Rectangle): number;
  public abstract getTriangleSquare(triangle: Triangle): number;
  public abstract getAngleBetweenTriangleEdges(edge1: number, edge2: number, triangle: Triangle): number;
}
