const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {

    if(req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("<h1>Hello, World!</h1>");
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Página não encontrada');
    }

    if(req.url === '/user') {
        const user = [
         {   name: 'John Doe',
             email: 'john@doe.com'
        },
    
        {   name: 'Jane Doe',
            email: 'jane@doe.com'
        }
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(user));
    };

}); 
server.listen(port, () => console.log('rodando na porta ${port}'));