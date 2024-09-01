import { EmitEventMethod } from './types.js';

export class IEventEmitter<T, E> {
  /**
   *В конструктор передается метод listenEvent экземпляра класса IPublisher
   */
  protected _emitEvent: EmitEventMethod<T, E>;
  protected constructor(listenEvent: EmitEventMethod<T, E>) {
    this._emitEvent = listenEvent;
  }
}
