//Importing the classes.

const {DockingStation} = require("./dockingstation.js");
const {Scooter} = require("./scooter.js");
const {User} = require("./user.js");
const {Maintenance} = require("./maintenance.js");

//Defining a few scooter instances.

let hp1 = new Scooter ("HP1", 100);
let hp2 = new Scooter ("HP2", 24);
let hp3 = new Scooter ("HP3", 74);

//Defining the hydepark instance of DockingStation.

let hydePark = new DockingStation("Hyde Park", [hp1]);

console.log(hp2.range);

hydePark.chargeScooter(hp2, () => {});

setTimeout(() => {
    console.log(hp2.range);
}, 3000);
















