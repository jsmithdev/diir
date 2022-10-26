
const util = require('util')
const path = require('path')
const exec_normal = require('child_process').exec
const exec = util.promisify(exec_normal)


async function handleCommand(command){

    //console.log('handleCommand ', command)

    const promise = exec(command, { cwd: process.env.CWD });
    const child = promise.child; 
    
    child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });
    child.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
    });
    child.on('close', function(code) {
        console.log('closing code: ' + code);
    });
    
    // i.e. can then await for promisified exec call to complete
    const { stdout, stderr } = await promise;

    if(stderr){
        console.log('ERROR: ', stderr)
    }
    if(stdout){
        console.log('OUTPUT: ', stdout)
    }

    return 'EXIT'
}


module.exports = {
    handleCommand,
}
