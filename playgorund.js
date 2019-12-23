const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    handler: function(){
        console.log("Adding a new function")
    }
})

console.log(yargs.argv)