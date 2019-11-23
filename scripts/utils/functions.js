
const vscode = require('./vscode')

module.exports = {
    handleFuncs,
}

    
async function handleFuncs(name){
    console.log('handleFuncs ', name)
    if(name === 'Code'){
        // open in vs code
        console.log('open in vs code todo')
        const out = await vscode.open(process.env.CWD)

        return out
    }
    if(name === 'Quit'){
        return 'EXIT'
    }
}