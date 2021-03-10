
const path = require('path')

const vscode = require('./vscode')

const storage = require('json-store')

const store = storage(path.join(process.env.HOME_DIR, '.diir.json'))


const {
    SYM_CODE,
    SYM_UP,
    SYM_BACK,
    SYM_EXIT,
    SYM_START_DIR,
} = process.env;

// order shown to user
const names = [
    SYM_BACK,
    SYM_CODE,
    SYM_UP,
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
        return await vscode.open(process.env.CWD)
    }

    else if(name === SYM_START_DIR){
        return await store.set('START_DIR', process.env.CWD)
    }
}


module.exports = {
    names,
    handleFunctions,
}
