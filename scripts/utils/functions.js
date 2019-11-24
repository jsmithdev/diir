
const vscode = require('./vscode')

const names = [
    process.env.SYM_BACK,
    'Code',
    'Quit',
]

    
async function handleFunctions(name){

    //console.log('handleFunctions ', name)

    if(name === 'Code'){
        return await vscode.open(process.env.CWD)
    }
    
    else if(name === process.env.SYM_BACK){
        return process.env.CWD = process.env.CWD
            .substring(0, process.env.CWD.lastIndexOf('/'))
    }

    else if(name === 'Quit'){
        return 'EXIT'
    }
}


module.exports = {
    names,
    handleFunctions,
}
