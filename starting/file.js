const fs = require ("fs");

// //create a new file b code
// //Syncronization call
// //fs.writeFileSync('./test.txt', 'Hey! How are you?');


// //Async
// //fs.writeFile('./test.txt', 'Hey! How are you?', (err)=>);

// //give directly return
// const resut = fs.readFileSync("./contact.txt", "utf-8");
// console.log(resut);


// //Don't return like Sync
// fs.readFile("./contact.txt", "utf-8", (err, result) =>{ //=> back
//     if (err) {
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
// });

fs.appendFileSync("./test.txt", `\nhi, ${new Date().toLocaleString()}, `);
//fs.cpSync('./test.txt', './copy.txt');
//fs.unlinkSync('./cpy.txt');

console.log(fs.statSync("./test.txt"));