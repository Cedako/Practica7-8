// var Emitter = require('./emitter');
var Emitter = require('events')
// Ahora se solicita "events" en vez del archivo "emitter"
var config = require('./config')
// Se inyecta la dependencia config
var emtr = new Emitter();

emtr.on(config.events.GREET, () => {
    console.log('somewhere, someone said hello.')
});
// Se invoca "greet" a través de config, donde su string ahora está asignada a una variable, para evitar typos.

emtr.on(config.events.GREET, () => {
    console.log('a greeting occurred.')
});

console.log('Hello!')
emtr.emit('greet');

emtr.on('jump', () => {
    console.log('someone jumped!')
});

console.log(emtr)
emtr.emit('jump');