const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) =>{
const routs = {
    '/' : '/index.html',
    '/home':'/index.html',
    '/book':'/book.html',
    '/fava':'/fava.html',
    '/note':'/note.html',


}
let paths = routs[req.url] || req.url;
let filepath 
const root =path.join(__dirname , '..')
if(paths.startsWith('/product')){
    filepath= '.'+paths;
}else if(paths.startsWith('/bookshelf')){
    filepath= '.'+paths;
}else if(paths.startsWith('/bookimg')){
    filepath= '.'+paths;
}else if(req.url.startsWith('/pdf')){
    filepath= path.join(root,'pdf',path.basename(req.url))
}

else {
    filepath='./frontend'+paths;
} 
let ext =path.extname(filepath)
let contentType = 'text/html'

switch (ext){
    case '.css' : contentType = 'text/css';
    break;
    case '.js' : contentType = 'text/javascript'
    break;
        case '.jpg' : contentType = 'image/jpeg'
    break;
        case '.png' : contentType = 'image/png'
    break;
      case '.pdf' : contentType = 'application/pdf'
    break;
}

fs.readFile(filepath, (err, content) =>{
    if(err){
        res.writeHead(404, { 'Content-Type':'text/plain'})
        res.end("404 not found")
    } else{
        res.writeHead(200, {'Content-Type':contentType})
        res.end(content)
    }
})
})
    
server.listen(3002, () => {
    console.log("server is runnig");
    
})