class DockingStation {
    static dockingStations = [];

    constructor(name, availableScooters) {
        this.name = name;
        this.availableScooters = availableScooters;
        this.faultyScooters = [];
        this.constructor.dockingStations.push(this.name);
    };

    markAsFaulty(scooter) {
        this.availableScooters = this.availableScooters.filter(el => el.scooterId !== scooter.scooterId);
        this.faultyScooters.push(scooter);
    };

    chargeScooter(scooter, callback) {
        let tempVar = this
        setTimeout( () => {
            scooter.chargeLevel = 100;
            tempVar.availableScooters.push(scooter);
            console.log("Scooter Charged");
            return callback("done.");
        }, 2000)
    };

    undockScooter(scooter) {
        this.availableScooters = this.availableScooters.filter(el => el.scooterId !== scooter.scooterId);
    };
};

module.exports = {DockingStation};