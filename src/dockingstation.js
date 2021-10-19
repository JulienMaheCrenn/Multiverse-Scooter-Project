class DockingStation {
    static dockingStations = [];

    constructor(name) {
        this.name = name;
        this.availableScooters = [];
        this.faultyScooters = [];
        this.constructor.dockingStations.push(this.name);
    };

    markAsFaulty(scooter) {
        this.availableScooters = this.availableScooters.filter(el => el.scooterId !== scooter.scooterId);
        this.faultyScooters.push(scooter);
    };

    chargeScooter(scooter) {
        let tempVar = this
        setTimeout( () => {
            scooter.chargeLevel = 100;
            scooter.range = 32;
            tempVar.availableScooters.push(scooter);
            console.log("Scooter Charged");
        }, 2000)
    };

    undockScooter(scooter) {
        this.availableScooters = this.availableScooters.filter(el => el.scooterId !== scooter.scooterId);
    };
};

module.exports = {DockingStation};