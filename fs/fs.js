//fs - file system
const fs = require('fs');

// console.log(fs);
// reading file
// fs.readFile('./files/file1.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// });

// console.log('I am the last line in the code');


// writing file

// fs.writeFile('./files/file2.txt', 'Hello from file systems write method', () => {
//     console.log('File writing completed!!!')
// })

// fs.writeFile('./files/file3.txt', 'New file, hello again', () => {
//     console.log('File writing completed!!!')
// })


// directories

// if(!fs.existsSync('./blogs')){ // Sync
//     fs.mkdir('./blogs', err =>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log('Directory created');
//             fs.writeFile('./blogs/blog.txt', 'My blog', () => { console.log('blog created')})
//         }
//     })
// }else{
//     console.log('File exists, try new name!')
// }

// deleting file
if(fs.existsSync('./files/file1.txt')){
    fs.unlink('./files/file1.txt', (err, data) => {
        if(err){ console.log(err)
        }else{
          console.log('Deleted the file');
        }
        
    })
}else{
    console.log('No Such file');
}

