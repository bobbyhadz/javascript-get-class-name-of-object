// EXAMPLE 1 - Get the Class Name of an Object in JavaScript

class Person {}

const p1 = new Person();

console.log(p1.constructor.name); // 👉️ Person

console.log(Person.name); // 👉️ Person

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Class Name of an Object by creating a method on the class

// class Person {
//   getClassName() {
//     return this.constructor.name;
//   }
// }

// const p1 = new Person();

// const className = p1.getClassName();

// console.log(className); // 👉️ Person

// ------------------------------------------------------------------

// // EXAMPLE 3 - Accessing the `name` property directly on the class

// class Person {}

// console.log(Person.name); // 👉️ Person

// ------------------------------------------------------------------

// // EXAMPLE 4 - Checking if an object was created using a specific class

// class Person {}

// const p1 = new Person();

// if (p1.constructor.name === 'Person') {
//   // 👇️ this runs
//   console.log("The object's constructor is Person");
// }

// // --------------------------------------------------

// // ✅ If you minify your code for production, do this
// if (p1.constructor.name === Person.name) {
//   // 👇️ this runs
//   console.log("The object's constructor is Person");
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the class name of an object by defining a static method

// class Person {
//   static getClassName() {
//     return 'Person';
//   }

//   getClassName() {
//     return Person.getClassName();
//   }
// }

// const p1 = new Person();

// const className = p1.getClassName();
// console.log(className); // 👉️ Person

// console.log(Person.getClassName()); // 👉️ Person
