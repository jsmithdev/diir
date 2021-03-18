
const ora = require('ora')

const {
    join,
} = require('path')

const {
	readFileSync,
} = require('fs')

const {
	exec,
} = require('child_process')

module.exports = {
    openOrg,
}

async function openOrg (repoDir) {

    const spinner = ora('Opening org in browser...').start()

    try {
            
        const dir = join(repoDir, '.sfdx', 'sfdx-config.json')

        const data = readFileSync(dir, 'utf8')

        const json = JSON.parse(data);

        const { defaultusername } = json
        
        const cmd = exec(`sfdx force:org:open -u ${defaultusername}`)

        cmd.stdout.pipe(process.stdout)

        const type = defaultusername.includes('@') ? 'user' : 'alias'

        spinner.succeed(`Opening with ${type} ${defaultusername}`)

    } catch (error) {
        spinner.fail(`Error: ${error.message}`)
    }
}
