// Object.prototype
// Preson.prototype

// Person constructor
function Person(firstName, lastName, dob) {
    this.firsName = firstName;
    this.lastName = lastName;
    // this.age = age;
    this.birthday = new Date(dob);
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate age
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function() {
    return `${this.firsName} ${this.lastName}`;
}

// Get married
Person.prototype.getsMaried = function(newLastName) {
    this.lastName = newLastName;
}

const pasha = new Person('Pavel', 'Ivanov', '8-12-90');
const masha = new Person('Masha', 'Petrova', 'March 20 1978');

console.log(masha);

console.log(masha.calculateAge());

console.log(masha.getFullName());

masha.getsMaried('Ivanova');

console.log(masha.getFullName());

console.log(masha.hasOwnProperty('firstName'));
console.log(masha.hasOwnProperty('getFullName'));