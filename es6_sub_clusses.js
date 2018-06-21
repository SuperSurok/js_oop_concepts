class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return `Hello there, ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static gerMembershipCost() {
        return 50000;
    }
}

const pasha = new Customer('Pasha', 'Ivanov', '444-44-44', 'Premium');
console.log(pasha.greeting());
console.log(Customer.gerMembershipCost());