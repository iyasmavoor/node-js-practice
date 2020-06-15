const url =require('url');
const myurl =new URL('http://mywebsite.com/hello.html?id=100&stratus=active');
//serialized url
console.log(myurl.href);
console.log(myurl.toString);
//host (root domain)
console.log(myurl.host);
//hostname does not include port
console.log(myurl.hostname);
//pathname
console.log(myurl.pathname);
//serialized  qury
console.log(myurl.search);
//params obje
console.log(myurl.searchParams);
//add para
myurl.searchParams.append('abc','123');
//loop through params
myurl.searchParams.forEach((value,name)=> console.log(`${name}:${value}`));
 