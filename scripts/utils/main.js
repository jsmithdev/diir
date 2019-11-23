
const inquirer = require('inquirer')
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

const questions = require('./questions')
const {handleFuncs} = require('./functions')

module.exports = {
    main,
}

async function main(){

    const answer = await inquirer.prompt( questions.main )

    console.log('RESPONSE: '+answer.response)

    if(answer.response === process.env.SYM_BACK){
        process.env.CWD = process.env.CWD
            .substring(0, process.env.CWD.lastIndexOf('/'))
    }

    else if(answer.response === process.env.SYM_FUNC){
        
        const { response } = await inquirer.prompt( questions.funcs )
        const func_response = await handleFuncs(response)

        if(func_response === 'EXIT'){
            return console.log('later ;)')
        }

    }

    else {
        process.env.CWD = `${process.env.CWD}/${answer.response}`
    }

    main()
}
