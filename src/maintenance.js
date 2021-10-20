class Maintenance {

    static sendRepair(dockingStation, callback) {
        if (dockingStation.faultyScooters.length > 0) {
            console.log("A repairman is on their way.");
            for (const element of dockingStation.faultyScooters) {
                setTimeout(() => {
                    element.chargeLevel = 100;
                    dockingStation.faultyScooters = dockingStation.faultyScooters.filter(el => el.scooterId !== element.scooterId);
                    dockingStation.availableScooters.push(element);
                    console.log("Scooter Repaired");
                    return callback("Done.");
                }, 4000);
            };
        }else {
            return("No maintenance necessary.");
        };
    };
};

module.exports = {Maintenance};