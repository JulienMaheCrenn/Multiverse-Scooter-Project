//Importing the classes.

const {DockingStation} = require("./dockingstation.js");
const {Scooter} = require("./scooter.js");
const {User} = require("./user.js");

//Defining a few scooter instances.

hp1 = new Scooter ("HP1", 100);
hp2 = new Scooter ("HP2", 24);
hp3 = new Scooter ("HP3", 74);

//Defining the hydepark instance of DockingStation.

hydePark = new DockingStation("Hyde Park",[hp1,hp2,hp3]);


