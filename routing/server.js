const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res)=>{
    const url = req.url;
    
    let path = './views/';

    switch(url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html'
            break;
        case '/data':
            res.setHeader('Content-Type', 'application/json');
            let data = { name: 'John', age: '24'}
            res.end(JSON.stringify(data));
            break;
        default:
            res.statusCode = 404;
            path += '404.html';
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log('Error occurred')
        }else{
            res.write(data);
            res.end();
        }
    })
})

server.listen('3001', 'localhost', ()=>{
    console.log('Listening to requests @ 3001');
})