// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    let sum = 0;
    this.sides.forEach((side) => (sum += side));
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid() {
    const sides = this.sides;
    if (
      sides[0] + sides[1] > sides[2] &&
      sides[1] + sides[2] > sides[0] &&
      sides[2] + sides[0] > sides[1]
    ) {
      return true;
    } else {
      return false;
    }
  }
}
class Square extends Polygon {
  get isValid() {
    const sides = this.sides;
    if (
      sides[0] === sides[1] &&
      sides[2] === sides[3] &&
      sides[0] === sides[2] &&
      sides[1] === sides[3]
    ) {
      return true;
    } else {
      return false;
    }
  }
  get area() {
    return this.sides[0] * this.sides[1];
  }
}
