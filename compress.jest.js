const fs = require('fs');
const compress = require('./compress');


jest.mock('fs');

describe('Compress Function', () => {
    const inputFilePath = 'input.txt';
    const outputFilePath = 'output.txt';

    test('should compress the file content', () => {
        fs.readFile.mockImplementation((filePath, encoding, callback) => callback(null, 'aaabbbccc'));
        fs.writeFile.mockImplementation((filePath, data, encoding, callback) => {
            expect(data).toBe('a3b3c3');
            callback(null);
        });

        compress(inputFilePath, outputFilePath);
    });
});


