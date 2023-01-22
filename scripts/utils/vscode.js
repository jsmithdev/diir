
const fs = require('fs')
const util = require('util')
const path = require('path');

const mkdir = util.promisify(fs.mkdir)

//const spawn_normal = require('child_process').spawn
//const spawn = util.promisify(spawn_normal)
const exec_normal = require('child_process').exec
const exec = util.promisify(exec_normal)

const ora = require('ora')


module.exports = {
    open,
}

async function open (path) {

    const spinner = ora('Opening in VS Code...').start();

    await exec(`code ${path}`)
    
    spinner.succeed(`Opened ${path}`)
}