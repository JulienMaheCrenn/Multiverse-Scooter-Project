const {DockingStation} = require("../src/dockingstation.js");
const {Scooter} = require("../src/scooter.js");
const {User} = require("../src/user.js");
const {Maintenance} = require("../src/maintenance.js");

//Creating blank variables for future testing.
let hydePark = undefined;
let hp1 = undefined;
let bob = undefined;

//Creating tests for the User class.

describe("Testing the User class.", () => {

    beforeAll(() => {
        bob = new User ("Bob", 24);
    });

    afterEach(() => {
        bob = new User ("Bob", 24);
    })

    test("Testing that bob is an instance of User.", () => {
        expect(bob).toBeInstanceOf(User);
    });

    test("Testing that bob passes the age test.", () => {
        expect(bob.checkAge()).toBe("Welcome to our electric scooter renting app.");
    });

    test("Testing that bob fails the age test.", () => {
        bob.age = 17;
        expect(bob.checkAge()).toBe("This service is only availabe to users over the age of 18.");
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

describe("Testing the DockingStation class.", () => {

    beforeAll(() => {
        hp1 = new Scooter("HP1", 45);
        hydePark = new DockingStation ("Hyde Park", [hp1]);
      
    });

    test("Testing that hydePark is an instance of DockingStation.", () => {
        expect(hydePark).toBeInstanceOf(DockingStation);
    });

    test("Testing that the creation of hydepark is pushed into DockingStation's static array.", () => {
        expect(DockingStation.dockingStations.length).toBeGreaterThan(0);
    });

    test("Testing that the undockScooter function removes the specified scooter from the availableScooters array.", () => {
        hydePark.undockScooter(hp1);
        expect(hydePark.availableScooters.length).toBe(0);
    });

    test("Testing that the markAsFaulty function removes a scooter from the availableScooters array and puts it into the faultyScooters array.", () => {
        hydePark.markAsFaulty(hp1);
        expect(hydePark.availableScooters.length).toBe(0);
        expect(hydePark.faultyScooters.length).toBe(1);
    });

    test("Testing that the chargeScooter method completes", done => {
        function callback (str) {
            expect(str).toBe("done.");
            done();
        };
        hydePark.chargeScooter(hp1,callback);
    });

    /*afterAll(() => {
        jest.useRealTimers();
    });*/
});

//Testing the Maintenance class.

describe("Testing the Maintenance Class.", () => {

    beforeAll(() => {
        hp1 = new Scooter("HP1",100);
        hydePark = new DockingStation("Hyde Park", [hp1]);
    });

    afterEach(() => {
        hp1 = new Scooter("HP1",100);
        hydePark = new DockingStation("Hyde Park", [hp1]);
    });

    test("Testing that the sendRepair method detects when there're faulty scooters at a docking station.", () => {
        hydePark.markAsFaulty(hp1);
        expect(Maintenance.sendRepair(hydePark)).toBe("A repairman is on their way.");
    });

    test("Testing that the sendRepair method detects when there're no faulty scooters at a docking station.", () => {
        expect(Maintenance.sendRepair(hydePark)).toBe("No maintenance necessary.");
    });
});
