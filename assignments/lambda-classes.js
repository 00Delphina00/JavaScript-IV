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

const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  fred.speak();