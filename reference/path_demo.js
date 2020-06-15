const path=require('path');
console.log(path.basename(__filename));
//directory name
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename).ext);
//concatenate or join
console.log(path.join(__dirname,'test','iyas.html'));

