const fs = require('fs')
const util = require('util')

//const readdir = fs.readdirSync

module.exports = {
    diir,
    funcs,
}

function diir() {

    const contents = fs.readdirSync( process.env.CWD )
        .filter(item => !item.includes('.'))
    
    // todo add <-- Back and Actions here
    //console.log(contents)

    return [
        process.env.SYM_BACK,
        process.env.SYM_FUNC,
        ...contents
    ];
}


function funcs () {
    return [
        'Code',
        'Quit',
    ]
}