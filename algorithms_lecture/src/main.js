class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak = function () {
    console.log("My name is " + this.name);
  };
}
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  speak = function () {
    console.log("My name is " + this.name + " and my major is " + this.major);
  };
}
const student = new Student("Jane", 22, "English");
student.speak();
