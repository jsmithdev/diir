const path = require('path')

const inquirer = require('inquirer')
const storage = require('json-store')

const {
    openOrg,
} = require('./sfdx')

const {
    handleCommand,
} = require('./command')

const vscode = require('./vscode')
const questions = require('./questions')


const store = storage(path.join(process.env.DIR_HOME, '.diir.json'))

const {
    SYM_CODE,
    SYM_OPEN_ORG,
    SYM_UP,
    SYM_BACK,
    SYM_EXIT,
    SYM_START_DIR,
    SYM_COMMAND,
} = process.env;

// order shown to user
const names = [
    SYM_BACK,
    SYM_UP,
    SYM_CODE,
    SYM_COMMAND,
    SYM_OPEN_ORG,
    SYM_START_DIR,
    SYM_EXIT,
];

async function handleFunctions(name){

    //console.log('handleFunctions ', name)

    if(name === SYM_BACK){
        return
    }

    if(name === SYM_UP){
        return process.env.CWD = process.env.CWD
            .substring(0, process.env.CWD.lastIndexOf('/'))
    }

    else if(name === SYM_EXIT){
        return 'EXIT'
    }

    else if(name === SYM_CODE){
        return vscode.open(process.env.CWD)
    }

    else if(name === SYM_START_DIR){
        return store.set('DIR_START', process.env.CWD)
    }

    else if(name === SYM_OPEN_ORG){
        return openOrg(process.env.CWD)
    }

    else if(name === SYM_COMMAND){
        
        //console.log('SYM_COMMAND HIT')
        
        const { response } = await inquirer.prompt( {
            name: 'response',
            message: `Type a Command`,
            type: 'input',
        } )
        const func_response = await handleCommand(response)

        if(func_response === 'EXIT'){
            return console.log('\n')
        }
    }
}


module.exports = {
    names,
    handleFunctions,
}
