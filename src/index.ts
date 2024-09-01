import { DefaultGeometry } from './geometry/DefaultGeometry.js';
import { EuclidPlaneGeometryComputing } from './geometry/EuclidPlaneGeometryComputing.js';
import { Polygon } from './geometry/figures/Polygon.js';
import { FigureEvent } from './geometry/figures/types.js';

const geometry = new DefaultGeometry(new EuclidPlaneGeometryComputing());
const triangle = geometry.createTriangle(3, 4, 5);
triangle.draw();
console.log(triangle.type);
console.log('perimeter: ' + triangle.getPerimeter());
console.log('square: ' + (await triangle.getSquare()));
console.log('all angles: ', triangle.angles);
console.log('between 3 4: ', triangle.getAngle(3, 4));
console.log('between 3 5: ', triangle.getAngle(3, 5));
console.log('between 4 5: ', triangle.getAngle(4, 5));

const circle = geometry.createCircle(1);
circle.draw();
console.log(circle.type);
console.log('perimeter: ', circle.getPerimeter());
console.log('square: ', await circle.getSquare());

const ellipse = geometry.createEllipse(5, 6);
ellipse.draw();
console.log(ellipse.type);
console.log('perimeter: ', ellipse.getPerimeter());
console.log('square: ', await ellipse.getSquare());

const hexagon = geometry.createPerfectPolygon(5, 6);
console.log(hexagon.type);
hexagon.draw();
console.log(await hexagon.getSquare());

const rect = geometry.createRectangle(4, 7);
rect.draw();
console.log(rect.type);
console.log('perimeter: ', rect.getPerimeter());
console.log('square: ', await rect.getSquare());

const polygon = geometry.createPolygon(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
polygon.draw();
console.log('perimeter: ', polygon.getPerimeter());
console.log(await polygon.getSquare());

const start_callback = function name(event: FigureEvent) {
  console.log('\nstart drawing ' + event.target.type + ' >>>');
  if (event.target instanceof Polygon) {
    console.log(event.target.edges);
  }
};

const finishcallback = function name(event: FigureEvent) {
  console.log('<<< finish drawing ' + event.target.type + '\n');
};

geometry.subscribe('startdrawing', start_callback);
geometry.subscribe('finishdrawing', finishcallback);
ellipse.draw();
polygon.draw();
geometry.unsubscribe('finishdrawing', finishcallback);
circle.draw();
rect.draw();
geometry.subscribe('finishdrawing', finishcallback);
hexagon.draw();
triangle.draw();
