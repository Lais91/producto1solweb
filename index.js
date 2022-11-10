const http = require('http');
const port = 3000;
const fs = require('fs');



const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('login.html', (error,data) => {
        if(error){
            res.writeHead(404)
            res.write("archivo no encontrado")
        }else{
            res.write(data)
        }
        res.end()
    });  
});

server.listen(port, () => {
    console.log(`He arrancado en el puerto ${port}`);
})