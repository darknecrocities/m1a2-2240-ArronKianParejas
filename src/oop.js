// ───────────────────────────────────────────────────────────────────────────
// 8. OOP: classes, methods, inheritance
// ───────────────────────────────────────────────────────────────────────────
//
// A class is a blueprint for objects that share the same shape and behavior.
// Function components have mostly replaced classes in React, but they haven't
// disappeared: older class components, and error boundaries (which can ONLY be
// classes), still use them. Knowing `class`, `constructor`, `this`, `extends`,
// and `super` is core JavaScript.
//
// New to these? Read section 8 of CONCEPTS.md first.

// A rectangle. The constructor takes width and height and stores them on the
// instance (this.width, this.height). The area() method returns width × height.
//   const r = new Rectangle(3, 4)
//   r.area()  ->  12
export class Rectangle {
  // TODO: a constructor(width, height), then an area() method
}

// A square IS A rectangle whose sides are equal. Make Square EXTEND Rectangle.
// Its constructor takes a single `side` and passes it to the parent constructor
// with super(...). It inherits area() for free, so don't redefine it.
//   const s = new Square(5)
//   s.area()  ->  25
export class Square extends Rectangle {
  // TODO: a constructor(side) that calls super(...)
}

// A counter that holds a number, like a tiny piece of state. The constructor
// takes an optional starting value (default 0) stored on this.count. increment()
// adds 1 and decrement() subtracts 1; both update this.count.
//   const c = new Counter()    // c.count is 0
//   c.increment(); c.increment()
//   c.count  ->  2
//   c.decrement()
//   c.count  ->  1
export class Counter {
  // TODO: a constructor(start = 0), an increment(), and a decrement()
}
