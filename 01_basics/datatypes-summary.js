 // 1.primitive = inko copy krke diya jata hai jo bhi changes hote hai toh voh copy wale data se hote hai
 // 7 types : String , Number, Boolean , Null , Undefined , Symbol(kise bhi value ko unique banane ke liye),  BigInt 

 const id = Symbol('123')
 const anotherid = Symbol('123')

 console.log(id === anotherid);


 //2.refrence (non primitive) (memory ka refrence directly allocate kiya jata hai)
 // arrays , objects , functions 


 const heros=["shaktiman" , "doga"];

 let myObj={
    name:"akansha",
    age: 18,

 }

 const myFunction = function(){
    console.log("hello world");
 }
 
// ***************************************************************

// stack {primitive}  heap {non-primitive}

let myname = "akansha"
let anothername= myname
anothername= "rawat"

console.log(myname);
console.log(anothername);