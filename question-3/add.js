const logFolder = '/logs';
const fs = require('fs');

if (!__dirname + logFolder) {
    fs.mkdir(logFolder, { recursive: true }, (err) => {
        if (err) throw err;
    });
}
process.chdir(logFolder);

for (i = 0; i < 10; i++) {
    fs.appendFile('log' + i + '.txt', i, (err) => {
        if (err) { throw err }
    })
} 