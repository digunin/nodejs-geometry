import { Ellipse } from './figures/Ellipse.js';
import { PerfectPolygon } from './figures/PerfectPolygon.js';
import { Polygon } from './figures/Polygon.js';
import { Rectangle } from './figures/Rectangle.js';
import { Triangle } from './figures/Triangle.js';
import { GeometryComputing } from './GeometryComputing.js';

export class EuclidPlaneGeometryComputing extends GeometryComputing {
  public override getEllipsePerimeter(ellipse: Ellipse): number {
    const { minorRadius, majorRadius } = ellipse;
    return Math.sqrt((minorRadius * minorRadius + majorRadius * majorRadius) / 2) * 2 * Math.PI;
  }

  public override getPolygonPerimeter(polygon: Polygon): number {
    return polygon.edges.reduce((a, b) => a + b);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public override getPolygonSquare(polygon: Polygon): number {
    throw new Error('getPolygonSquare not implemented');
  }

  public override getEllipseSquare(ellipse: Ellipse): number {
    return Math.PI * ellipse.minorRadius * ellipse.majorRadius;
  }

  public override getPerfectPolygonSquare(perfectPolygon: PerfectPolygon): number {
    const { edge, edgeQuantity } = perfectPolygon;
    const apothem = edge / 2 / Math.tan(Math.PI / edgeQuantity);
    return (apothem * this.getPolygonPerimeter(perfectPolygon)) / 2;
  }

  public override getRectangleSquare(rect: Rectangle): number {
    return rect.width * rect.height;
  }

  public override getTriangleSquare(triangle: Triangle): number {
    const {
      edges: [a, b, c],
    } = triangle;
    const semiPerimeter = (a + b + c) / 2;
    return Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
  }

  public override getAngleBetweenTriangleEdges(edge1: number, edge2: number, triangle: Triangle): number {
    const counterEdge = triangle.edges.filter(edge => edge !== edge1 && edge !== edge2);
    if (counterEdge.length !== 1) {
      throw new Error('This triangle have no edges with such size');
    }
    const [edge3] = counterEdge;
    const angleRad = Math.acos((edge1 * edge1 + edge2 * edge2 - edge3 * edge3) / (2 * edge1 * edge2));
    return this.fromRadToDeg(angleRad);
  }

  public fromRadToDeg(angle: number): number {
    return (angle / (Math.PI * 2)) * 360;
  }
}
