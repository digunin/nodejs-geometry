import { IEventEmitter } from '../../events/IEventEmitter.js';
import { GeometryComputing } from '../GeometryComputing.js';
import type { FigureType, FigureEmitEventMethod, FigureEventType } from './types.js';

export abstract class Figure extends IEventEmitter<FigureEventType, Figure> {
  protected _type: FigureType = 'figure';

  constructor(
    protected _computing: GeometryComputing,
    emitEvent: FigureEmitEventMethod,
  ) {
    super(emitEvent);
  }

  protected _draw(): void {
    console.log('Some figure');
  }

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
