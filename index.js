process.env.INIT_DIR = process.env.PWD
process.env.HOME_DIR = require('os').homedir()

process.env.SYM_BACK = '<-- Back'
process.env.SYM_FUNC = 'λ Functions'

// todo use INIT_DIR unless something was passed in 
// const args = process.argv.slice(2)
// console.log('args: ', args)

process.env.CWD = process.env.INIT_DIR

//console.log(process.env.HOME_DIR)
//console.log(process.env.INIT_DIR)
//console.log(process.env.CWD)



const { main } = require('./scripts/Router')


main()