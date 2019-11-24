const fs = require('fs')
const { names } = require('./functions')

module.exports = {
    diir,
    functions: names,
}

function diir() {

    const contents = fs.readdirSync( process.env.CWD )
        .filter(item => !item.includes('.'))
    
    //console.log(contents)

    return [
        process.env.SYM_FUNC,
        //process.env.SYM_SEP,
        ...contents
    ];
}
