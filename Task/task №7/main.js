function totalSquare(array) {
  
  let sum = 0;
  let arr = array;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].square() 
  }
  return sum
}

class FourSides {};

class Square extends FourSides {

  constructor(side) {
    super()
    this.side = side
  }

  square() {
    return this.side * this.side
  }
}
class Restangle extends FourSides {

  constructor(width, height) {
    super()
    this.width = width;
    this.height = height;
  }

  square() {
    return this.width * this.height
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  square() {
    return this.radius * this.radius * Math.PI
  }
  
}


const square = new Square(5);
const restangle = new Restangle(3, 6);
const circle = new Circle(4);
const arrayOfFigures = [square, restangle, circle];


console.log(totalSquare(arrayOfFigures));