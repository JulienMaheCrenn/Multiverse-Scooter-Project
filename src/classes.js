new class DockingStation {
    static dockingStations = [];

    constructor(name, availableScooters) {
        this.name = name;
        this.availableScooters = availableScooters;
        this.faultyScooters = [];
        this.constructor.dockingStations.push(this);
    };

    markAsFaulty(scooter) {
        this.faultyScooters.push(scooter);
    };

    chargeScooter(scooter) {
        setTimeout(function () {
            this.availableScooters.push(scooter);
            console.log("Scooter Charged");
        }, 2000);
    };
};


new class Scooter {
    constructor(scooterId, chargeLevel, range) {
        this.scooterId = scooterId;
        this.chargeLevel = chargeLevel;
        this.range = range;
        this.rideDistance = 0;
    };
};