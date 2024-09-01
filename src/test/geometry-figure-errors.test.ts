import { AbstractGeometry } from '../geometry/AbstractGeometry.js';
import { DefaultGeometry } from '../geometry/DefaultGeometry.js';
import { EuclidPlaneGeometryComputing } from '../geometry/EuclidPlaneGeometryComputing.js';

describe('', () => {
  let geometry: AbstractGeometry;

  beforeEach(() => {
    geometry = new DefaultGeometry(new EuclidPlaneGeometryComputing());
  });

  test('polygon whith wrong edges size', () => {
    try {
      geometry.createPolygon(3, 4, 9);
      fail('polygon constructor with such edges must throw error');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '';
      expect(errorMessage).toBe('A polygon with such edges is impossible');
    }
  });

  test('perfect polygon whith wrong edges quantity', () => {
    try {
      geometry.createPerfectPolygon(1, 2);
      fail('polygon constructor with such edges quantity must throw error');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '';
      expect(errorMessage).toBe('Edge quantity of polygon must be atleast 3');
    }
  });

  test('triangle with wronge edges size', () => {
    try {
      geometry.createTriangle(10, 7, 20);
      fail('triangle constructor with such edges must throw error');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '';
      expect(errorMessage).toBe('A polygon with such edges is impossible');
    }
  });

  test('polygon getSquare must return rejected promise', () => {
    const polygon = geometry.createPolygon(3, 4, 5);
    polygon
      .getSquare()
      .then(() => fail('promise resolved when reject expected'))
      .catch(() => {});
  });
});
