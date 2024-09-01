import { DefaultGeometry } from '../geometry/DefaultGeometry.js';
import { EuclidPlaneGeometryComputing } from '../geometry/EuclidPlaneGeometryComputing.js';
import { AbstractGeometry } from '../geometry/AbstractGeometry.js';

describe('geometry computing tests', () => {
  let geometry: AbstractGeometry;

  beforeEach(() => {
    geometry = new DefaultGeometry(new EuclidPlaneGeometryComputing());
  });

  test('polygon perimeter', () => {
    const polygon = geometry.createPolygon(3, 4, 5);
    expect(polygon.getPerimeter()).toBe(12);
  });

  test('ellipse perimeter', () => {
    expect(Math.round(geometry.createEllipse(10, 15).getPerimeter())).toBe(80);
    expect(Math.round(geometry.createEllipse(8, 8).getPerimeter())).toBe(50);
  });

  test('circle perimeter', () => {
    expect(Math.round(geometry.createCircle(8).getPerimeter())).toBe(50);
    expect(Math.round(geometry.createCircle(50).getPerimeter())).toBe(314);
  });

  test('ellipse squre', async () => {
    expect(Math.round(await geometry.createEllipse(10, 15).getSquare())).toBe(471);
    expect(Math.round(await geometry.createEllipse(22, 22).getSquare())).toBe(1521);
  });

  test('circle squre', async () => {
    expect(Math.round(await geometry.createCircle(16).getSquare())).toBe(804);
    expect(Math.round(await geometry.createCircle(22).getSquare())).toBe(1521);
  });

  test('perfect polygon perimeter', async () => {
    expect(Math.round(geometry.createPerfectPolygon(9, 3).getPerimeter())).toBe(27);
    expect(Math.round(geometry.createPerfectPolygon(1, 3546).getPerimeter())).toBe(3546);
    expect(Math.round(geometry.createPerfectPolygon(4, 8).getPerimeter())).toBe(32);
  });

  test('perfect polygon square', async () => {
    expect(Math.round(await geometry.createPerfectPolygon(11, 3).getSquare())).toBe(52);
    expect(Math.round(await geometry.createPerfectPolygon(19, 4).getSquare())).toBe(361);
    expect(Math.round(await geometry.createPerfectPolygon(10, 7).getSquare())).toBe(363);
    expect(Math.round(await geometry.createPerfectPolygon(12, 6).getSquare())).toBe(374);
  });

  test('rectangle perimeter', async () => {
    expect(Math.round(await geometry.createRectangle(5, 3).getPerimeter())).toBe(16);
    expect(Math.round(await geometry.createRectangle(19, 19).getPerimeter())).toBe(76);
    expect(Math.round(await geometry.createRectangle(10, 7).getPerimeter())).toBe(34);
    expect(Math.round(await geometry.createRectangle(12, 6).getPerimeter())).toBe(36);
  });

  test('rectangle square', async () => {
    expect(Math.round(await geometry.createRectangle(5, 3).getSquare())).toBe(15);
    expect(Math.round(await geometry.createRectangle(19, 19).getSquare())).toBe(361);
    expect(Math.round(await geometry.createRectangle(10, 7).getSquare())).toBe(70);
    expect(Math.round(await geometry.createRectangle(12, 6).getSquare())).toBe(72);
  });

  test('triangle perimeter', async () => {
    expect(Math.round(geometry.createTriangle(5, 3, 4).getPerimeter())).toBe(12);
    expect(Math.round(geometry.createTriangle(19, 19, 6).getPerimeter())).toBe(44);
  });

  test('triangle square', async () => {
    expect(Math.round(await geometry.createTriangle(11, 11, 11).getSquare())).toBe(52);
    expect(Math.round(await geometry.createTriangle(19, 19, 6).getSquare())).toBe(56);
    expect(Math.round(await geometry.createTriangle(10, 7, 15).getSquare())).toBe(29);
    expect(Math.round(await geometry.createTriangle(12, 6, 8).getSquare())).toBe(21);
  });
});
