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

//Student class
class Student extends Person {
    constructor(newObjects){
        super(newObjects);
        this.previousBackground = newObjects.previousBackground;
        this.className = newObjects.className
        this.favSubjects = newObjects.favSubjects;
    };
    listsSubjects(){
        console.log(`${this.name}'s favorite subjects are ${this.favSubjects}.`);
    };
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}
//Project Manager class

class ProjectManager extends Instructor{
     constructor(newObjects){
         super(newObjects);
         this.gradClassName = newObjects.gradClassName;
         this.favInstructor = newObjects.favInstructor;
     }
     standup(channel){
          console.log(`${this.name} announces to ${channel}, @channel standy times!`);
     }
}

//to test change the class name on new for the fred object and quote out
// any methods that the changed class does not have.
const fred = new ProjectManager({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    previousBackground: "Mining Operations",
    className: 'Full Stack Web Development',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
  });

  console.log(fred);
  fred.speak();
  fred.standup("WebPT6");
 /*console.log(fred.catchphrase);
   console.log("Delphina replies to fred's catchphrase saying,"Word...What's good?");
  fred.grade("math");
  fred.demo("math"); 
  fred.listsSubjects();
  fred.PRAssignment("math");
  fred.sprintChallenge("Array Methods");*/