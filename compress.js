const fs = require('fs');

function runLengthEncode(input) {
    let encoded = '';
    let count = 1;
    for (let i = 1; i < input.length; i++) {
        if (input[i] === input[i - 1]) {
            count++;
        } else {
            encoded += input[i - 1] + count;
            count = 1;
        }
    }
    encoded += input[input.length - 1] + count;
    return encoded;
}

function compress(inputFilePath, outputFilePath) {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) throw err;
        const lines = data.split('\n');
        const compressedLines = lines.map(line => runLengthEncode(line));
        fs.writeFile(outputFilePath, compressedLines.join('\n'), 'utf8', err => {
            if (err) throw err;
            console.log('File compressed successfully.');
        });
    });
}

module.exports = compress;
