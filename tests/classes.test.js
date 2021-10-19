const {DockingStation} = require("../src/dockingstation.js");
const {Scooter} = require("../src/scooter.js");
const {User} = require("../src/user.js");
const {Maintenance} = require("../src/maintenance.js");

//Creating blank variables for future testing.
let hydePark = undefined;
let hp1 = undefined;
let hp2 = undefined;
let bob = undefined;

//Creating tests for the User class.

describe("Testing the User class.", () => {

    beforeAll(() => {
        bob = new User ("Bob", 24);
    });

    test("Testing that bob is an instance of User.", () => {
        expect(bob).toBeInstanceOf(User);
    });

    test("Testing that bob passes the age test.", () => {
        expect(bob.checkAge()).toBe("Welcome to our electric scooter renting app.");
    });

});

//Creating tests for the Scooter class.

describe("Testing the Scooter class.", () => {

    beforeAll(() => {
        hp1 = new Scooter("HP1", 74);
    });

    test("Testing that hp1 is an instance of Scooter.", () => {
        expect(hp1).toBeInstanceOf(Scooter);
    });

    test("Testing that the range attribute is a product of the chargeLevel attribute.", () => {
        expect(hp1.range).toBe(32/100*hp1.chargeLevel);
    });

});

//Creating tests for the DockingStation class.


