const EventEmitter =require('events');

//create a class
class MyEmitter extends EventEmitter{

}
//init object
const myemitter =new MyEmitter();
//event listener

myemitter.on('event',()=>console.log('event fired'));

myemitter.emit('event');
myemitter.emit('event');