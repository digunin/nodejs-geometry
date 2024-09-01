import { DefaultGeometry } from '../geometry/DefaultGeometry.js';
import { EuclidPlaneGeometryComputing } from '../geometry/EuclidPlaneGeometryComputing.js';

describe('geometry computing tests', () => {
  const geometry = new DefaultGeometry(new EuclidPlaneGeometryComputing());

  const polygon = geometry.createPolygon(1, 1, 1, 1, 1);
  const perfectPolygon = geometry.createPerfectPolygon(1, 8);
  const rect = geometry.createRectangle(5, 5);
  const triangle = geometry.createTriangle(2, 3, 4);
  const ellipse = geometry.createEllipse(2, 3);
  const circle = geometry.createCircle(5);

  const start_callback = jest.fn();
  const finish_callback = jest.fn();

  test('subscribed callbacks must be called', () => {
    geometry.subscribe('startdrawing', start_callback);
    geometry.subscribe('finishdrawing', finish_callback);
    polygon.draw();
    expect(start_callback).toHaveBeenCalledTimes(1);
    expect(finish_callback).toHaveBeenCalledTimes(1);

    perfectPolygon.draw();
    expect(start_callback).toHaveBeenCalledTimes(2);
    expect(finish_callback).toHaveBeenCalledTimes(2);
  });

  test('Subscribing a callback to the same event should have no effect', () => {
    geometry.subscribe('startdrawing', start_callback);
    geometry.subscribe('finishdrawing', finish_callback);
    geometry.subscribe('startdrawing', start_callback);
    geometry.subscribe('finishdrawing', finish_callback);
    circle.draw();
    expect(start_callback).toHaveBeenCalledTimes(3);
    expect(finish_callback).toHaveBeenCalledTimes(3);
  });

  test('колбэк может быть подписан на несколько событий', () => {
    geometry.subscribe('startdrawing', finish_callback);
    rect.draw();
    expect(start_callback).toHaveBeenCalledTimes(4);
    expect(finish_callback).toHaveBeenCalledTimes(5);
  });

  test('callback should not be called after unsubscribe', () => {
    geometry.unsubscribe('startdrawing', start_callback);
    triangle.draw();
    expect(start_callback).toHaveBeenCalledTimes(4);
    expect(finish_callback).toHaveBeenCalledTimes(7);

    geometry.unsubscribe('startdrawing', finish_callback);
    geometry.subscribe('finishdrawing', start_callback);
    ellipse.draw();
    expect(start_callback).toHaveBeenCalledTimes(5);
    expect(finish_callback).toHaveBeenCalledTimes(8);

    geometry.unsubscribe('finishdrawing', start_callback);
    geometry.unsubscribe('finishdrawing', finish_callback);
    ellipse.draw();
    expect(start_callback).toHaveBeenCalledTimes(5);
    expect(finish_callback).toHaveBeenCalledTimes(8);
  });
});
