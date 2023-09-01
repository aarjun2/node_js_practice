const EventEmitter = require('events');
const handler = require('./handler');

const eventEmitter = new EventEmitter();

eventEmitter.on('connect', handler.handleConnect);

eventEmitter.emit('connect');