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

Содержит методы для создания фигур и методы подписки на события и отписки от них

```typescript
createCircle(radius: number)
```
Создает круг с радиусом <code>radius</code>

---
```typescript
createEllipse(minorRadius: number, majorRadius: number)
```
Создает эллипс с полуосями <code>minorRadius</code> и <code>majorRadius</code>

---
```typescript
createPolygon(edge1: number, edge2: number, edge3: number, ...edges: number[])
```
Создает многоугольник с произвольным числом сторон, но не меньше трех

:warning::warning::warning: **Если из переданных сторон невозможно построить многоугольник - будет брошено исключение. Например, невозможно построить многоугольник, если одна из сторон превышает сумму всех остальных сторон**

:warning::warning::warning: **Вычисление площади многоугольника не реализовано, возвращается -1**

---
```typescript
createPerfectPolygon(edge: number, quantity: number)
```
Создает правильный многоугольник с размерой стороны <code>edge</code> и количеством сторон <code>quantity</code>

:warning::warning::warning: **Если quantity меньше чем 3 - будет брошено исключение**

У правильного многоугольника все стороны и углы равны

---
```typescript
createRectangle(width: number, height: number)
```
Создает прямоугольник со сторонами <code>width</code> и <code>height</code>

---
```typescript
createTriangle(edge1: number, edge2: number, edge3: number)
```
Создает треугольник со сторонами <code>edge1</code>, <code>edge2</code>, <code>edge3</code>

:warning::warning::warning: **Если из переданных сторон невозможно построить треугольник - будет брошено исключение. Например, невозможно построить треугольник, если одна из сторон превышает сумму всех остальных сторон**

---
```typescript
subscribe(event:EventType, callback:(e:Event)=>void)
unsubscribe(event:EventType, callback:(e:Event)=>void)
```
Подписка и на события рисования и отписка от них.
<code>EventType</code> и <code>Event</code> это
``` typescript
type EventType = "startdrawing" | "finishdrawing"
type Event = {
  eventType: EventType,
  target: Figure
}

```

## Фигуры (наследники класса Figure)

### Общие методы

```typescript
draw()
```
Рисует фигуру

---
```typescript
getPerimeter()
```

Возвращает периметр фигуры

---
```typescript
getSquare()
```
Возвращает площадь фигуры

---
```typescript
get type
```
Геттер, возвращает тип фигуры

### Polygon (и все наследники: PerfectPolygon, Rectangle, Triangle)
```typescript
get edges
```
Геттер, массив с размерами всех сторон

---
```typescript
get edgesQuantity
```
Геттер, количество сторон

### PerfectPolygon
```typescript
get edge
```
Геттер, размер стороны

---
```typescript
get edges
```
Геттер, массив с размерами всех сторон

---
```typescript
get edgesQuantity
```
Геттер, количество сторон

---
### Rectangle
```typescript
get width
get height
```
Геттеры, ширина и высота

---
```typescript
get edges
```
Геттер, массив с размерами всех сторон

---
```typescript
get edgesQuantity
```
Геттер, количество сторон

---
### Triangle
```typescript
public getAngle(edge1: number, edge2: number)
```
Возвращает угол (в градусах) между сторонами <code>edge1</code> и <code>edge2</code>

:warning::warning::warning: **Если какая-то из сторон (или обе) отсутствует в треугольнике - будет брошено исключение**

```typescript
get angles
```
Геттер, возвращает массив с тремя углами (в градусах) треугольника

---
```typescript
get edges
```
Геттер, массив с размерами всех сторон

---
```typescript
get edgesQuantity
```
Геттер, количество сторон

### Ellipse
```typescript
get minorRadius
```

Геттер, малая полуось

---
```typescript
get majorRadius
```

Геттер, большая полуось

### Circle
```typescript
get radius
```
Геттер, радиус

---
```typescript
get diameter
```
Геттер, диаметр
