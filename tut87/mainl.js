const fs = require('fs')
console.log(fs);

console.log('starting');
fs.writeFile('asif.txt','is a good boy',()=>{
    console.log('Done');

    fs.readFile('asif.txt',(error,data)=>{
        console.log(error, data.toString());
    })
})

    fs.appendFile('asif.txt', 'too',(e,d)=>{
        console.log(d);
    
})
console.log('Ending');