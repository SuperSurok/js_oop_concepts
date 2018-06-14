// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Pasha', 'Petrov');

console.log(person1.greeting())

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Create customer
const customer1 = new Customer('Masha', 'Ivanova', '111-111-11-11', 'Premium');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} welcome !`;
}
console.log(customer1.greeting());