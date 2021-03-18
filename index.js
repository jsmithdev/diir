process.env.HOME_DIR = require('os').homedir()

const storage = require('json-store')
const path = require('path')

const store = storage(path.join(process.env.HOME_DIR, '.diir.json'))

const START_DIR = store.get('START_DIR')

process.env.INIT_DIR = process.env.PWD

process.env.CWD = START_DIR ? START_DIR : process.env.INIT_DIR

process.env.SYM_FUNC = '🔧 Functions'
process.env.SYM_CODE = '⌨   Code'
process.env.SYM_OPEN_ORG = '🌏  SFDX Open Org'
process.env.SYM_BACK = '👈  Back'
process.env.SYM_UP = '☝  Up'
process.env.SYM_EXIT = '🏁  Exit'

process.env.SYM_START_DIR = '👇  Set as Init'


const { main } = require('./scripts/Router')


main()



/* 
// todo use INIT_DIR unless something was passed in
// todo option to use HOME_DIR ?  
// const args = process.argv.slice(2)
// console.log('args: ', args)
//console.log(process.env.HOME_DIR)
//console.log(process.env.INIT_DIR)
//console.log(process.env.CWD)
*/