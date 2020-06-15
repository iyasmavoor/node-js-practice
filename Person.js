
//module wrapper function have access into function
//(exports,require,module,__filename,__dirname)
//console.log(__dirname);
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    greeting(){
        console.log(`my name is ${this.name} and i am ${this.age}`);
    }
}
module.exports =Person;
//console.log(__filename);