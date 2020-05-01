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
