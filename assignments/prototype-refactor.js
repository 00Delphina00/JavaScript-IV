/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject (attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
    this.destroy = function(name){
         return `${this.name} was removed from the game.`;
    };
}
class GameObject2 extends GameObject {
      constructor(attributes){
          super(attributes);
      };
}

/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/

function CharacterStats(charStats){
  GameObject.call(this, charStats);
  this.healthPoints = charStats.healthPoints;
  this.takeDamage = function(name){
    return `${this.name} took damage.`;
    };
}

CharacterStats.prototype = Object.create(GameObject.prototype);

class CharacterStats2 extends CharacterStats{
     constructor(charStats){
         super(charStats);
     }
}

/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/

function Humanoid (attributes){
CharacterStats.call(this, attributes);
this.team = attributes.team;
this.weapons = attributes.weapons;
this.language = attributes.language;
this.greet = function(attributes){
return `${this.name} offers a greeting in ${this.language}`;
};
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

class Humanoid2 extends Humanoid {
    constructor(attributes){
        super(attributes);

    }
}

/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid2({
createdAt: new Date(),
dimensions: {
  length: 2,
  width: 1,
  height: 1,
},
healthPoints: 5,
name: 'Bruce',
team: 'Mage Guild',
weapons: [
  'Staff of Shamalama',
],
language: 'Common Tongue',
});

const swordsman = new Humanoid2({
createdAt: new Date(),
dimensions: {
  length: 2,
  width: 2,
  height: 2,
},
healthPoints: 15,
name: 'Sir Mustachio',
team: 'The Round Table',
weapons: [
  'Giant Sword',
  'Shield',
],
language: 'Common Tongue',
});

const archer = new Humanoid2({
createdAt: new Date(),
dimensions: {
  length: 1,
  width: 2,
  height: 4,
},
healthPoints: 10,
name: 'Lilith',
team: 'Forest Kingdom',
weapons: [
  'Bow',
  'Dagger',
],
language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.




// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

function Hero (heroAttributes, villainDamage){
Humanoid.call(this, heroAttributes);
this.naturalDisaster = function (heroAttributes, callback){
  callback(-50);
  console.log(`The Chief Nature Spirits of Planet Earth no longer obey humans or nonhumans. They just dealt 50 Points of damage to ALL races.`);   
};
//this.EpidemicsOfDisease
//this.2WeeksNonstopRainAmericaAndAfricaCities
//this.ZikaVirusStealFertility
//this.MagnetosphereOpensBurns
//this.CaliforniaHurricaneTriggersMegaQuakeAndTsunami
//this.AmericanDollarEqualsPeso
if (villainDamage !== null){
   this.healthPoints = this.healthpoints + villainDamage; 
   console.log(`Hero received ${villainDamage} points of damage.`);
} else {console.log(`No damage received this round.`)};
}

function villain (villainAttributes, heroDamage){
Humanoid.call(this, villainAttributes);
this.psychologicalWarfare = function(villainAttributes,  callback){
 //console.log  you are trained to hate your own people. Your anceint history is rewritten while villain 
 //commits
 //cultural misappropriation stealing your people's identity.  Villain renames your gods & changes religious texts.
//Villain cheats and receives technology from greys and rigellians to appear superior.
 //villain mass murders and mass incarcerates your tribe which is much smaller than the villain's tribe.
 //villain kidnaps your children and leaves you isolated or in jail for homelessness in old age.
 //console.log 100 points damage.
 //this.subconsciousBias  50 points damage
}
}
//  console.log(Nami.destroy());
//  console.log(Nami.takeDamage());
//  console.log(Nami.greet());
