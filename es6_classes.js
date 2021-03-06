class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    getMarried(newLastName) {
        this.lastName = newLastName;
    }
    static addNumbers(x, y) {
        return x + y;
    }
}

const masha = new Person('Masha', 'Petrova', '11-12-1980');
masha.getMarried('Ivanova');

console.log(masha);

console.log(Person.addNumbers(1, 2));