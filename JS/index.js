//let age;
//let student;

//const name = `jane`;
//age = 22;
//student = true;

//console.log(name);
//console.log(age);
//console.log(student);

//concatenation
var name = `jon`;

const intro = `my name is ` + name;
const introTwo = `my name is ${name}`;
console.log(intro);
console.log(introTwo);

//arrays
const names = ["paul", "Amir", "Tobi", "Emeka", "Grace"];
const introThree = `Team memebers are ${names}`;
console.log(introThree);

const selected = names[0];
console.log(selected);

//objects

const person = {
  name: `Jordan`,
  age: 23,
  height: `6'2`,
};
person.height = `6'4`;
console.log(person);

//functions

function object() {
  const name = `alex`;
  const place = `Kigali`;
  return place;
}

console.log(object());

function two(name, place) {
  const sentence = `${name} lives in ${place}`;
  return sentence;
}

console.log(two(`jay`, `kampala`));

//function wit default values

function three(name = `Sonny`, place = `Arkansas`) {
  const sentence = `${name} lives in ${place} `;
  return sentence;
}

console.log(three(`ken`, `Gulu`));

//arrow functions

const arrowThree = (name, place) => {
  const sentence = `${name} lives in ${place}`;
  return sentence;
};

console.log(arrowThree(`Alex`, `Pretoria`));

const arrowTwo = (name = `James`, place = `Lira`) => {
  const sentence = `${name} went to ${place} before lockdown`;
  return sentence;
};

console.log(arrowTwo(`Jordan`, `Kira`));

//conditionals

const items = 45;
const tax = `45`;

if (items == tax) {
  console.log(`equal`);
} else {
  console.log(`not equal`);
}

// and , or operators
const age = 45;
const worth = 34;
if (age === 67 && worth == 34) {
  console.log("it is correct");
} else {
  console.log("it is false");
}

if (age === 67 || worth == 34) {
  console.log("it is correct");
} else {
  console.log("it is false");
}

if (age === 45 || worth == 34) {
  console.log("it is correct");
} else {
  console.log("it is false");
}

//classes

//const people = 30;
//class MyClass extends people {
//  constructor() {}
//  myMethod() {
//    const age = 56;
//    const marriage = true;
//    const vow = "I will be here";
//  }
//  anotherMethod() {
//    if (this.marriage && this.age === 56) {
//      return this.vow;
//    } else if (people === 30) {
//      console.log("people are nice");
//    }
//  }
//}

//loops
//while loops

var money = 0;

while (money < 10) {
  console.log(`is running`);
  money++;
}

//for loops
