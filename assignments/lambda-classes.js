// CODE here for your Lambda Classes
//Base Class
class Person {
    constructor(newObjects){
        this.name = newObjects.name;
        this.age = newObjects.age;
        this.location = newObjects.location;
        this.gender = newObjects.gender;
    };
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    };
}
//Instructor class is the child inheriting from the Parent class
//called Person.
class Instructor extends Person {
    constructor(newObjects){
        super(newObjects);
        this.specialty = newObjects.specialty;
        this.favLanguage = newObjects.favLanguage;
        this.catchPhrase = "Dont forget the homies";
    };
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    };
    grade(subject){
        console.log(`${this.name} receives a perfect score on ${subject}.`);
    };

}
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
//Student class
class Student extends Person {
    constructor(newObjects){
        super(newObjects);
        this.previousBackground = newObjects.previousBackground;
        this.favSubjects = newObjects.favSubjects;
    };
    listsSubjects(){
        console.log(`${this.name}'s favorite subjects are ${this.favSubjects}.`);
    }
}

  console.log(fred);
  fred.speak();
  fred.demo("math");
  fred.grade("math");
  console.log(fred.catchPhrase);
  console.log(`Delphina replies saying, "Word.......What's good?"`);