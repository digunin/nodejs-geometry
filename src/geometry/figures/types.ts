import { AbstractEvent, EmitEventMethod, SubscriberCallback } from '../events/types.js';
import { Figure } from './figure.js';

export type FigureType = 'figure' | 'polygon' | 'ellipse' | 'rectangle' | 'circle' | 'perfect polygon' | 'triangle';
export type FigureEventType = 'startdrawing' | 'finishdrawing';
export type FigureEvent = AbstractEvent<FigureEventType, Figure>;
export type FigureSubscriberCallback = SubscriberCallback<FigureEvent>;
export type FigureEmitEventMethod = EmitEventMethod<FigureEventType, Figure>;
