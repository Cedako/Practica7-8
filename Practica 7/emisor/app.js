// var Emitter = require('./emitter');
var Emitter = require('events')
// Ahora se solicita "events" en vez del archivo "emitter"
var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('somewhere, someone said hello.')
});

emtr.on('greet', () => {
    console.log('a greeting occurred.')
});

console.log('Hello!')
emtr.emit('greet');

emtr.on('jump', () => {
    console.log('someone jumped!')
});

console.log(emtr)
emtr.emit('jump');