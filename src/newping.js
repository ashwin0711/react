 var ping = require('ping');

 export async function test(){
    //var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
    var host = 'google.com'
    var msg

    ping.sys.probe(host,async function(isAlive){
        
        msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';});
        console.log("before")
        await new Promise(r => setTimeout(r, 5000));
        console.log("after")
        //console.log(msg);
        return msg
        
}

var ash = test()

console.log(ash) 


/* async function pollDOM () {
    var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
    var host = 'google.com'
    let res = await ping.promise.probe(host);
    console.log(res);
    return res
  }
  
  pollDOM();
  */