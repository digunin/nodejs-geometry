# Библиотека для работы с геометрическими фигурами

## Быстрый старт

Скопируйте папку <code>geometry</code> в свой проект и импортируйте <code>DefaultGeometry</code> из файла DefaultGeometry.js. Теперь вы можете создавать фигуры и подписываться на события отрисовки

```typescript
const geometry = new DefaultGeometry();

const finishDrawCallback = function(event: FigureEvent) {
  console.log('<<< finish drawing ' + event.target.type + '\n');
};
geometry.subscribe('finishdrawing', finishDrawCallback)

const triangle = geometry.createTriangle(3, 4, 5);
triangle.draw();
```

## DefaultGeometry

Содержит методы для создания фигур и методы подписки/отписки на события

```typescript
createCircle(radius: number)
```
Создает круг с радиусом radius

---
```typescript
createEllipse(minorRadius: number, majorRadius: number)
```
Создает эллипс с малой полуосями minorRadius и majorRadius

---
```typescript
createPolygon(edge1: number, edge2: number, edge3: number, ...edges: number[])
```
Создает многоугольник с произвольным числом сторон, но не меньше трех

---
```typescript
createPerfectPolygon(edge: number, quantity: number)
```
Создает правильный многоугольник с размерой стороны edge и количеством сторон quantity
У правильного многоугольника все стороны и углы равны

---
```typescript
createRectangle(width: number, height: number)
```
Создает прямоугольник со сторонами width и height

---
```typescript
createTriangle(edge1: number, edge2: number, edge3: number)
```
Создает треугольник со сторонами edge1, edge2, edge3

---
```typescript
subscribe(event:EventType, callback:(e:Event)=>void)
unsubscribe(event:EventType, callback:(e:Event)=>void)
```
Подписка и на события рисования и отписка от них EventType и Event это
``` typescript
type EventType = "startdrawing" | "finishdrawing"
type Event = {
  eventType: EventType,
  target: Figure
}

```

