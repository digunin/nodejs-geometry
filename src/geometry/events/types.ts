export type AbstractEvent<T, E> = { eventType: T; target: E };
export type SubscriberCallback<T> = (event: T) => void;
export type EmitEventMethod<T, E> = (eventType: T, eventEmitter: E) => void;
export type Subscribers<T extends string, E> = { [key in T]: SubscriberCallback<AbstractEvent<T, E>>[] };
