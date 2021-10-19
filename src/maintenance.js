class Maintenance {

    static sendRepair(dockingStation) {
        if (dockingStation.faultyScooters.length > 0) {
            return("A repairman is on their way.")
        }else {
            return("No maintenance necessary.");
        };
    };

    static repairScooter(scooter) {
    };
};

module.exports = {Maintenance};