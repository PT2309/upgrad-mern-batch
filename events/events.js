const events = require('events');

// console.log(events);

let emitter = new events.EventEmitter();

emitter.on('AreaOfCircle', r => console.log(`Area of the circle with the radius ${r} is`, 3.14*r*r));

emitter.emit('AreaOfCircle', 4);
emitter.emit('AreaOfCircle', 6);
emitter.emit('AreaOfCircle', 10);
