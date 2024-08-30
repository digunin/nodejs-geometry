import { DefaultGeometry } from './geometry/DefaultGeometry.js';
import { EuclidPlaneGeometryComputing } from './geometry/EuclidPlaneGeometryComputing.js';

const geometry = new DefaultGeometry(new EuclidPlaneGeometryComputing());
const triangle = geometry.createTriangle(3, 4, 5);
triangle.draw();
console.log(triangle.type);
console.log('perimeter: ' + triangle.getPerimeter());
console.log('square: ' + triangle.getSquare());
console.log('all angles: ', triangle.angles);
console.log('between 3 4: ', triangle.getAngle(3, 4));
console.log('between 3 5: ', triangle.getAngle(3, 5));
console.log('between 4 5: ', triangle.getAngle(4, 5));

const circle = geometry.createCircle(1);
circle.draw();
console.log(circle.type);
console.log('perimeter: ', circle.getPerimeter());
console.log('square: ', circle.getSquare());

const ellipse = geometry.createEllipse(5, 6);
ellipse.draw();
console.log(ellipse.type);
console.log('perimeter: ', ellipse.getPerimeter());
console.log('square: ', ellipse.getSquare());

const hexagon = geometry.createPerfectPolygon(5, 7);
console.log(hexagon.type);
hexagon.draw();
console.log(hexagon.getSquare());

const rect = geometry.createRectangle(4, 7);
rect.draw();
console.log(rect.type);
console.log('perimeter: ', rect.getPerimeter());
console.log('square: ', rect.getSquare());

const polygon = geometry.createPolygon(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
polygon.draw();
console.log('perimeter: ', polygon.getPerimeter());
try {
  console.log(polygon.getSquare());
} catch (e: unknown) {
  if (e instanceof Error) console.log(e.message);
}
