import fs from 'fs/promises'


let a =  await fs.readFile("asif.txt")
console.log(a.toString());


let b= await fs.appendFile("asif.txt", '\n\n\n This is amazing promises')