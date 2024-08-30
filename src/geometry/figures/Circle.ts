import { Ellipse } from './Ellipse.js';

export class Circle extends Ellipse {
  constructor(protected _radius: number) {
    super(_radius, _radius);
    this._type = 'circle';
  }

  public override draw(): void {
    console.log(`Circle with radius ${this._radius}`);
  }

  public get radius() {
    return this._radius;
  }

  public get diameter() {
    return this._radius * 2;
  }
}
