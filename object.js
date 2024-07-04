const person = {}; // empty object

person.firstName = "Ujjwal";
person.lastName = "Sinha";
person.age = 24;
person.eyeColor = "Blue";

console.log(person.firstName, person.lastName);


const Man = new Object(); // empty object using "new object();"

Man.firstName = "Saurabh";
Man.lastName = "Amay";
Man.age = 21;
Man.eyeColor = "Blue";

console.log(Man.firstName);

// object constructor function for women object

function Women(firstName,LastName){
    this.first = firstName;
    this.last = LastName;
}

const myWomen = new Women("Lucy", "Doe"); // creating myWomen object

Women.prototype.nationality = "Indian"; // using prototype we can add new properties to object constructors

Women.prototype.name = function(){   // using prototype we can add new method to object constructors
    return this.first + " " + this.last;
}

console.log(myWomen.name());

// Js General Methods

const person1 = {};  // Target Object 

    person1.firstName = "John";
    person1.lastName = "DOe";
    person1.age = 12;
    person1.eyeColor = "blue";

// source object

const person2 = {firstName: "Amay", lastName: "Doe"};

Object.assign(Man, person2);

let text = Object.entries(Man);

console.log(text);

// convert object into map using object.entries

let fruit = {Apple: 20, Pineapple: 2, Banana: 6};

const myMap = new Map(Object.entries(fruit));

console.log(myMap);

// create an object from list of key-value pairs

let Car = [
    ["VOLVO", 1],
    ["Mercedes", 2],
    ["MiniCooper", 3]
]

const myObj = Object.fromEntries(Car);

console.log(myObj);

// values and keys return in single dimension of array

let Vehicle = {
    name: "Volkswagen",
    model: "S3",
    year: 2020,
    color: "blue"
}

const keyVeh = Object.keys(Vehicle);

const valVeh = Object.values(Vehicle);

console.log(keyVeh);
console.log(valVeh);


