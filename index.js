"use strict";

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("value must be number");
    }
    this._from = from;
  }
  get to() {
    return this._to;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("value must be number");
    }
    if (to < this.from) {
      throw new RangeError("value must be better");
    }
    this._to = to;
  }

  getRange() {
    return new Array().concat(this.from, this.to);
  }

  validate(number) {
    if (number >= this.from && number <= this.to) {
      return number;
    }
    throw new RangeError("value must be validate");
  }
}

const qwerty = new RangeValidator(112, 255);
console.log(qwerty.validate(115));

class Figure3D {
  constructor(name) {
    this.name = name;
  }
  getVolume() {
    return 0;
  }
}
class Ball extends Figure3D {
  constructor(radius) {
    super("Ball");
    this.radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(radius) {
    if (typeof radius !== "number") {
      throw new TypeError("value must be number");
    }
    this._radius = radius;
  }
  getVolume() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }
}
class Cylinder extends Figure3D {
  constructor(radius, hight) {
    super("Cylinder");
    this.radius = radius;
    this.hight = hight;
  }
  get radius() {
    return this._radius;
  }
  set radius(radius) {
    if (typeof radius !== "number") {
      throw new TypeError("value must be number");
    }
    this._radius = radius;
  }
  get hight() {
    return this._hight;
  }
  set hight(hight) {
    if (typeof hight !== "number") {
      throw new TypeError("value must be number");
    }
    this._hight = hight;
  }
  getVolume() {
    return Math.PI * Math.pow(this.radius, 2) * this.hight;
  }
}

class Cube extends Figure3D {
  constructor(hight) {
    super("Cube");
    this.hight = hight;
  }
  get hight() {
    return this._hight;
  }
  set hight(hight) {
    if (typeof hight !== "number") {
      throw new TypeError("value must be number");
    }
    this._hight = hight;
  }
  getVolume() {
    return Math.pow(this.hight, 3);
  }
}

function getVolumeAnyFigura(figure) {
  if (figure instanceof Figure3D) {
    return figure.getVolume().toFixed(3);
  }
  throw new TypeError("not figure");
}

const ball = new Ball(-49);
const cylinder = new Cylinder(15, 18);
const cube = new Cube(56);

console.log(getVolumeAnyFigura(ball));
console.log(getVolumeAnyFigura(cylinder));
console.log(getVolumeAnyFigura(cube));
