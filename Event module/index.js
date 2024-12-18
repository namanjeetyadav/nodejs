// Events module
// Node.js has a build-in module, called "Events",
// Where you can create, fire and listen for- your own events.

// const EventEmitter = require("events")

// const event = new EventEmitter();

// event.on("sayMyName", ()=>{
//     console.log("Your name is Naman")
// });

// event.on("sayMyName", ()=>{
//     console.log("My middle name is Jeet")
// });

// event.on("sayMyName", ()=>{
//     console.log("My last name is Yadav")
// })

// event.emit("sayMyName")

const EventEmitter = require("events")
const event = new EventEmitter();

event.on("checkPage", (sc, msg)=>{
    console.log(`status code ${sc} and the page is ${msg}`);
})

event.emit("checkPage", 200, "ok");

