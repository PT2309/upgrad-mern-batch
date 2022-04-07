const events = require('events');
const util = require('util');

const Avatar = function(name){
    this.name = name;
}

util.inherits(Avatar, events.EventEmitter);

let cat = new Avatar('Shivani');
let monkey = new Avatar('Vishal');
let koala = new Avatar('Aman');

let avatars = [cat, monkey, koala];

avatars.forEach(avatar => {
    avatar.on('says', (msg) => {
        console.log(avatar.name + ' says : ' + msg);
    })
})

cat.emit('says', 'Welcome!!');
koala.emit('says', 'Nothing much');
cat.emit('says', 'I am attending Upgrad classes right now');
monkey.emit('says', 'Hello Guys!')
