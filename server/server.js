const http= require('http');

const server = http.createServer( (req, res) => {
    // console.log('Request Incoming!!!!', req);
    // console.log(req.method, req.url, req.headers.host);

    // console.log(res);
    res.setHeader( 'Content-Type', 'text/plain');
    res.write("<head> <link rel='stylesheet' href='#'></head>");
    res.write('<h1>Good evening!!</h1>');
    res.write('<p>hello from the node backend</p>');
    res.end();

})

server.listen(3000, 'localhost', () => {
    console.log('Listening at port no. 3000!!')
})