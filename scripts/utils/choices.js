const fs = require('fs')
const { names } = require('./functions')

module.exports = {
    diir,
    functions: names,
}

function diir() {

    const { CWD } = process.env;

    const contents = fs.readdirSync( CWD )
        .filter(item => !item.includes('.'))
        .map(name => ({
            name,
            time:fs.statSync(`${CWD}/${name}`).mtime.getTime()
        }))
        .sort((a, b) => b.time - a.time)
        .map(dir =>  dir.name)

    return [
        process.env.SYM_FUNC,
        //process.env.SYM_SEP,
        ...contents
    ];
}
