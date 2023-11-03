/* 
   Filename: ComplexCode.js
   Description: A complex JavaScript code that demonstrates various advanced concepts and techniques.
*/

// Define a class to represent a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Define a method to calculate the birth year of the person
  getBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }

  // Define a static method to merge two Person objects into a new one
  static merge(person1, person2) {
    const mergedName = person1.name + " " + person2.name;
    const mergedAge = (person1.age + person2.age) / 2;
    return new Person(mergedName, mergedAge);
  }
}

// Define an array of persons
const persons = [
  new Person("John", 32),
  new Person("Jane", 28),
  new Person("Mark", 45),
  new Person("Sarah", 36)
];

// Filter the persons older than 30 and map them to an array of birth years
const birthYears = persons
  .filter(person => person.age > 30)
  .map(person => person.getBirthYear());

// Display the birth years
console.log("Birth Years of Persons Older than 30:");
console.log(birthYears);

// Create a new Person object by merging the first two persons
const mergedPerson = Person.merge(persons[0], persons[1]);

// Display the merged person
console.log("Merged Person:");
console.log(mergedPerson);

// Define a class to represent a geometric shape
class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  // Define a method to calculate the area of the shape
  calculateArea() {
    throw new Error("Abstract method not implemented.");
  }
}

// Define a class to represent a rectangle, which extends the Shape class
class Rectangle extends Shape {
  constructor(name, color, width, height) {
    super(name, color);
    this.width = width;
    this.height = height;
  }

  // Override the calculateArea method to calculate the area of the rectangle
  calculateArea() {
    return this.width * this.height;
  }
}

// Create a rectangle object and calculate the area
const rectangle = new Rectangle("Rectangle", "blue", 10, 5);
const rectangleArea = rectangle.calculateArea();

// Display the area of the rectangle
console.log("Rectangle Area:");
console.log(rectangleArea);

// ...continue with more sophisticated and complex code...