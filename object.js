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


