class Scooter {
    constructor(scooterId, chargeLevel) {
        this.scooterId = scooterId;
        this.chargeLevel = chargeLevel;
        this.rideDistance = 0;
    };

    get range () {
        return (32/100) * this.chargeLevel;
    };
};



module.exports = {Scooter};