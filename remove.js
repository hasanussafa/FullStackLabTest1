
//Name: Kazi Hasanus Safa, StudentID: 101275458
//question 3(remove)
const fs = require('fs');
const path = require('path');
if(fs.existsSync("logDirectory")) { // checking logs
    fs.readdir("logDirectory", (err, files) => {
        if (err) throw err;// If any error

        for (let file of files) {
            const filepath = path.join("logDirectory", file);
            fs.unlink(filepath, err => {
                if (err) throw err;
            });
            console.log(`Deleted file ${file}`);//print files
        }
        fs.rmdirSync("logDirectory");//remove log
    });
}