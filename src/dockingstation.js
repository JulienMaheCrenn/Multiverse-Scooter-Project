class DockingStation {
    static dockingStations = [];

    constructor(name, availableScooters) {
        this.name = name;
        this.availableScooters = availableScooters;
        this.faultyScooters = [];
        this.constructor.dockingStations.push(this.name);
    };

    markAsFaulty(scooter) {
        this.faultyScooters.push(scooter);
    };

    chargeScooter(scooter) {
        setTimeout(function () {
            scooter.chargeLevel = 100;
            this.availableScooters.push(scooter);
            console.log("Scooter Charged");
        }, 2000);
    };
};

module.exports = {DockingStation};