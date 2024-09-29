const fs = require('fs')
console.log(fs);

console.log('starting');
fs.writeFile('asif.txt','is a good boy',()=>{
    console.log('Done');

    fs.readFile('asif.txt',(error,data)=>{
        console.log(error, data.toString());
    })
})
console.log('Ending');