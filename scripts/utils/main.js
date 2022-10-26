
const inquirer = require('inquirer')
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

const questions = require('./questions')
const {handleFunctions} = require('./functions')

module.exports = {
    main,
}

async function main(){

    const answer = await inquirer.prompt( questions.main )

    //console.log('RESPONSE: '+answer.response)


    if(answer.response === process.env.SYM_FUNC){
        
        const { response } = await inquirer.prompt( questions.functions )
        const func_response = await handleFunctions(response)

        if(func_response === 'EXIT'){
            return console.log('\n Bye, have a wonderful time! 👋\n')
        }

    }

    else {
        process.env.CWD = `${process.env.CWD}/${answer.response}`
    }

    main()
}
