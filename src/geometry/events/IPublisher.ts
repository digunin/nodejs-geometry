import { AbstractEvent, SubscriberCallback, Subscribers } from './types.js';

export class IPublisher<T extends string, E> {
  constructor(protected _subscribers: Subscribers<T, E>) {}
  /**
   *Этот метод передается в конструктор класса IEventEmitter
   *
   */
  protected listenEvent(eventType: T, eventEmitter: E): void {
    this.notify({ eventType, target: eventEmitter });
  }

  protected notify(event: AbstractEvent<T, E>) {
    this._subscribers[event.eventType].forEach(callback => callback(event));
  }

  public subscribe(type: T, callback: SubscriberCallback<AbstractEvent<T, E>>) {
    if (this._subscribers[type].includes(callback)) return;
    this._subscribers[type].push(callback);
  }

  public unsubscribe(type: T, callback: SubscriberCallback<AbstractEvent<T, E>>) {
    const index = this._subscribers[type].indexOf(callback);
    if (index === -1) return;
    this._subscribers[type].splice(index, 1);
  }
}
