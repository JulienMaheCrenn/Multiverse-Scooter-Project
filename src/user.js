class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    checkAge() {
        if (this.age >= 18) {
            return("Welcome to our electric scooter renting app.");
        }else {
            return("This service is only availabe to users over the age of 18.")
        };
    };
};

module.exports = {User};