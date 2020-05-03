var ping = require('ping');

function news(){
var host = '10.12.12.12'
var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
        return msg
    });
});
}

var test = news()
console.log("test = "+test)