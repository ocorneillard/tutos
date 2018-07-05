console.log('Starting app.js');
const yargs = require('yargs');

// require lodash / yargs / d'autres fichiers

// Lire yargs et comprendre son utilité

// Faites un console.log de argv

const argv = yargs
.argv ;
let cmd = argv._[0];

// Rajouter des conditions pour lire les commandes