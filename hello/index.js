const seneca = require('seneca')();

let hello = (msg, reply) => {
    reply(null, {answer: ('Hello ' + msg.name + ', Please listen to me!' )})
};

seneca.add('service:hello', hello).listen();
