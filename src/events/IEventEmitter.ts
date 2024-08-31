import { EmitEventMethod } from './types.js';

export class IEventEmitter<T, E> {
  protected _emitEvent: EmitEventMethod<T, E>;
  protected constructor(listenEvent: EmitEventMethod<T, E>) {
    this._emitEvent = listenEvent;
  }
}
