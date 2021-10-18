class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    checkAge() {
        if (this.age >= 18) {
            console.log("Welcome to our electric scooter renting app.");
        }else {
            console.log("This service is only availabel to users over the age of 18.")
        };
    };
};

module.exports = {User};