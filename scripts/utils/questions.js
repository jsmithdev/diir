const choices = require('./choices')

const { search } = require('./util')

module.exports = {
    
    main: [{
        name: 'response',
        message: `Navigate`,
        type: 'autocomplete',
        pageSize: 10,
        source: (answers, input) => search(answers, input, choices.diir())
    }],
    
    functions: [{
        name: 'response',
        message: `Functions`,
        type: 'autocomplete',
        pageSize: 10,
        source: (answers, input) => search(answers, input, choices.functions )
    }],
}

