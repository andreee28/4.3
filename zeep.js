const compress = require('./compress');
const decompress = require('./decompress');

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log('Usage: node zeep.js <mode> <inputFilePath> <outputFilePath>');
    console.log('mode: -c --compress | -d --decompress')
    process.exit(1);
}

const mode = args[0];
const inputFilePath = args[1];
const outputFilePath = args[2];

if (mode === '-c' || mode === '--compress') {
    compress(inputFilePath, outputFilePath);
} else if (mode === '-d' || mode === '--decompress') {
    decompress(inputFilePath, outputFilePath);
} else {
    console.log('Invalid mode. Use "-c" or "-d".');
    process.exit(1);
}
