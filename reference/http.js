const http =require('http');
//create server
http.createServer((req,res)=>{
    //write a res
    res.write('hallo');
    res.end();
}).listen(5000,()=>console.log('server running'));