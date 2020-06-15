//console.log('hallor ');
//const Person=require('./Person');
//const person1= new Person('npm',25);
//person1.greeting();
/*
const Logger =require('./logger');
const logger= new Logger();
logger.on('massage',data =>console.log('called listener',data));
logger.log('hallo world');
*/
const http =require('http');
const path= require('path');
const fs=require('fs');
const server =http.createServer((req,res)=>{
    /*if(req.url==='/'){
        fs.readFile(
            path.join(__dirname,'public','index.html'),
            (err,content)=>{
       if(err)throw(err);
       res.writeHead(200,{'content-type':'text/html'});
       res.end(content)
 

        })

      
    }*/
    let filepath= path.join(__dirname,'public',
    req.url==='/'?'index.html':req.url)
    let extname=path.extname(filepath);
    //inital content type
    let contentType='text/html';
    //check the ext
    switch(extname){
        case '.js':
            contentType='text/js';
            break;
        case '.css':
                contentType='text/css';
                break;
         case '.json':
                    contentType='text/json';
                    break;
         case '.png':
                        contentType='text/png';
                        break;

    }
    //readfile
    fs.readFile(filepath,(err,content)=>{
        if(err){
            if(err.code=='ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname,'public','404.html'),
                (err,content)=>{
                    res.writeHead(200,{'content-Type':'text/html'});
                    res.end(content,'utf8');
                })
                 
            }else{
                //some server error
                res.writeHead(500);
                res.end(`server error ${err.code}`);
            }
        }else{
            //succuss
            res.writeHead(200,{'content-Type':contentType});
            res.end(content,'utf-8');
        }
    });


});
const PORT=process.env.PORT||5000;
server.listen(PORT,()=>console.log(`server running on port ${PORT}`));