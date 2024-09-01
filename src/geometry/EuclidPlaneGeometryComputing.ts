import { Ellipse } from './figures/Ellipse.js';
import { PerfectPolygon } from './figures/PerfectPolygon.js';
import { Polygon } from './figures/Polygon.js';
import { Rectangle } from './figures/Rectangle.js';
import { Triangle } from './figures/Triangle.js';
import { GeometryComputing } from './GeometryComputing.js';

export class EuclidPlaneGeometryComputing extends GeometryComputing {
  /**
   * Находит периметр эллипса по приближенной формуле Эйлера
   *
   * В случае равенстава двух радиусов (т.е.  если это окружность)
   * формула не отличается от "два пи эр"
   *
   * Поэтому нет нужды переопределять метод getSquare в классе Circle
   *
   */
  public override getEllipsePerimeter(ellipse: Ellipse): number {
    const { minorRadius, majorRadius } = ellipse;
    return Math.sqrt((minorRadius * minorRadius + majorRadius * majorRadius) / 2) * 2 * Math.PI;
  }

  public override getPolygonPerimeter(polygon: Polygon): number {
    return polygon.edges.reduce((a, b) => a + b);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public override getPolygonSquare(polygon: Polygon): number {
    return -1;
  }

  public override getEllipseSquare(ellipse: Ellipse): number {
    return Math.PI * ellipse.minorRadius * ellipse.majorRadius;
  }

  /**
   * Находит площадь правильного многоугольника по фромуле: (апофема * периметр) / 2
   *
   * апофема - перпендикуляр из центра многоугольника к любой из сторон (или радиус вписаной окружности)
   *
   * апофема находится через тангенс половины угла равнобедренного треугольника,
   * (чьим основанием является сторона многоугольника, а треться вершина - центр многоугольника)
   * и половину стороны многоугольника
   *
   */
  public override getPerfectPolygonSquare(perfectPolygon: PerfectPolygon): number {
    const { edge, edgesQuantity } = perfectPolygon;
    const apothem = edge / 2 / Math.tan(Math.PI / edgesQuantity);
    return (apothem * this.getPolygonPerimeter(perfectPolygon)) / 2;
  }

  public override getRectangleSquare(rect: Rectangle): number {
    return rect.width * rect.height;
  }

  /**
   * Находит площадь теругольника по формуле Герона
   *
   * (по трем сторонам)
   *
   *          ___________________
   *         /
   *     \  /  p(p-a)(p-b)(p-c)
   *      \/
   *
   *     где p - половина периметра
   *
   * @returns Массив с тремя углами
   */
  public override getTriangleSquare(triangle: Triangle): number {
    const {
      edges: [a, b, c],
    } = triangle;
    const semiPerimeter = (a + b + c) / 2;
    return Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
  }

  /**
   * Находит угол между двумя сторонами треугольника по известным трем сторонам
   * Угол выводится из теоремы косинусов:
   *
   * Квадрат стороны "AB" = (сумма квадратов "AC" и "BC") минус 2 * AC * BC * cos(ACB)
   *
   * если передать стороны, которых нет в данном треугольнике -
   * будет брошено исключение
   *
   * @returns Угол в градусах
   */
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
