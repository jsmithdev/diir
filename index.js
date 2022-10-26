process.env.DIR_HOME = require('os').homedir()

const storage = require('json-store')
const path = require('path')

const store = storage(path.join(process.env.DIR_HOME, '.diir.json'))

const DIR_START = store.get('DIR_START') || store.get('START_DIR')

process.env.DIR_INIT = process.env.PWD

process.env.CWD = DIR_START || process.env.DIR_INIT

process.env.SYM_FUNC = '🔧 Functions'
process.env.SYM_CODE = '⌨   Code'
process.env.SYM_OPEN_ORG = '🌏  SFDX Open Org'
process.env.SYM_BACK = '❌  Cancel'
process.env.SYM_UP = '👈  Back a Directory'
process.env.SYM_EXIT = '🏁  Exit'

process.env.SYM_START_DIR = '📌  Set as Default Directory'


const { main } = require('./scripts/Router')


main()