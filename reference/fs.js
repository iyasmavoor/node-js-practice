const fs =require('fs');
const path =require('path');

//create folder
//fs.mkdir(path.join(__dirname,'/test'),{},err=>{
  //  if(err)throw err;
  //  console.log('folder created');
//});
//create and write to file
/*
fs.writeFile(path.join(__dirname,'/test','hallo.txt'),'hallow world',err=>{
    if(err)throw err;
    console.log('folder written');

    //append

    fs.appendFile(path.join(__dirname,'/test','hallo.txt'),
'i love node.js',err=>{
  if(err)throw err;
  console.log('folder written');
});
});

//read file
fs.writeFile(path.join(__dirname,'/test','hallo.txt'),
'utf8',err=>{
  if(err)throw err;
  console.log('folder written');
});
fs.readFile(path.join(__dirname,'/test','iyu.txt'), 
'utf8',(err,data)=>{
  if(err)throw err;
  console.log(data);
});

fs.rename(path.join(__dirname,'/test','iyu.txt'), 
path.join(__dirname,'/test','vs.txt'),err=>{
  if(err)throw err;
  console.log('file renamed');
});
*/