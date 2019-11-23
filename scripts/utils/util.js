const fuzzy = require('fuzzy')


module.exports = { 
    search,
}


function goBack (value) {
    return value === '<- Cancel'
}

async function search(answers, input, array) {

    input = input || '';

    const fuzzyResult = fuzzy.filter(input, array)

    return fuzzyResult.map(el => el.original)
}

