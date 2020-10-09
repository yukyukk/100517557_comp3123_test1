// JavaScript source code

const logFolder = './Logs';
const fs = require('fs');

if (fs.existsSync(logFolder)) {
    fs.readdir(logFolder, (err, files) => {
        files.forEach(file => {
            console.log("Deleting.. " + file);
        })
    })
    fs.rmdir(logFolder, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
        console.log(`${logFolder} is deleted!`);
    })
} else {
    console.log(logFolder + " does not exist!");
}