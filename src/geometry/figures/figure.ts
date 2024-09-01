import { IEventEmitter } from '../../events/IEventEmitter.js';
import { GeometryComputing } from '../GeometryComputing.js';
import type { FigureType, FigureEmitEventMethod, FigureEventType } from './types.js';

export abstract class Figure extends IEventEmitter<FigureEventType, Figure> {
  protected _type: FigureType = 'figure';

  /**
   * @param _computing Фигуры не вычисляют площадь и периметр самостоятельно,
   * а используют методы, реализованные в наследнике класса GeometryComputing
   *
   * @param emitEvent Этот метод вызывается для генерации события
   */
  constructor(
    protected _computing: GeometryComputing,
    emitEvent: FigureEmitEventMethod,
  ) {
    super(emitEvent);
  }

  protected _draw(): void {
    console.log('Some figure');
  }

  /**
   * Шаблонный метод
   *
   * Определяет порядок генерации событий "startdrawing" / "finishdrawing"
   *
   * и вызова метода _draw, переопредленного в подклассах
   */
  public draw() {
      this._emitEvent('startdrawing', this);
    this._draw();
      this._emitEvent('finishdrawing', this);
  }

  public abstract getPerimeter(): number;
  public abstract getSquare(): number;

  public get type() {
    return this._type;
  }
}
