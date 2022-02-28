const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initialize the object
const myEmitter = new MyEmitter();

// adding listener for log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //emit events
  myEmitter.emit("log", "Log event emitted!");
}, 1500);
