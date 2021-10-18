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
        setTimeout
    };
};