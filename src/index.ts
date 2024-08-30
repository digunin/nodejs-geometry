import { Polygon } from './geometry/figures/Polygon.js';

const triangle = new Polygon(6, 15, 20);
triangle.draw();
console.log(triangle.getPerimeter());
console.log(triangle.type);
