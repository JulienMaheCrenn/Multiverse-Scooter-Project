class Scooter {
    constructor(scooterId, chargeLevel) {
        this.scooterId = scooterId;
        this.chargeLevel = chargeLevel;
        this.range = (32/100) * chargeLevel;
        this.rideDistance = 0;
    };
};

module.exports = {Scooter};