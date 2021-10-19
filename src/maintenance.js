class Maintenance {
    static sendRepair(dockingStation) {
        if (dockingStation.faultyScooters.length > 0) {
            console.log("A repairman is on their way.");
        }else {
            console.log("No maintenance necessary.");
        };
    };
};

module.exports = {Maintenance};