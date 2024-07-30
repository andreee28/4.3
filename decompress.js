const fs = require('fs');

function runLengthDecode(input) {
    let decoded = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        i++;
        let count = '';
        while (i < input.length && !isNaN(input[i])) {
            count += input[i];
            i++;
        }
        i--;
        decoded += char.repeat(parseInt(count, 10));
    }
    return decoded;
}

function decompress(inputFilePath, outputFilePath) {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) throw err;
        const lines = data.split('\n');
        const decompressedLines = lines.map(line => runLengthDecode(line));
        fs.writeFile(outputFilePath, decompressedLines.join('\n'), 'utf8', err => {
            if (err) throw err;
            console.log('File decompressed successfully.');
        });
    });
}

module.exports = decompress;
