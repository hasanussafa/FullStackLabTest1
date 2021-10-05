//Name: Kazi Hasanus Safa, StudentID: 101275458
//question 3(add)
const fs = require('fs');
if(!fs.existsSync("logDirectory")) { // logs directory create, if log does not exist
    fs.mkdirSync("logDirectory");
}
process.chdir("logDirectory");
for(let i = 0; i < 10; i++) { // creating 10 files
    const filename = `log${i}.txt`;
    fs.writeFile(filename, 'File number '+i, (err) => {
        if (err) {
            throw err;
        }
    });
    console.log(filename);// print all filenames
}