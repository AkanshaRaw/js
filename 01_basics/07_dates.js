let mydate = new Date()
console.log(mydate.toString()); // mon jul 08 2024 time gmt
console.log(mydate.toDateString()); // mon jul 08 2024
console.log(mydate.toJSON()); // 2024-07-08 time
console.log(mydate.toLocaleDateString()); // 7/8/2024
console.log(mydate.toLocaleString()); // 7/8/2024 time 
console.log(mydate.toISOString()); // 2024-07-08 time 
console.log(mydate.toLocaleTimeString());  // time 
 

//date is an object 

//for specifying a specific date 
//let createdate = new Date(2024, 0 , 23 ) // month start with 0
let createdate = new Date(2024, 0 , 23 , 5, 3 ) // time aa jata hai locale se 

console.log(createdate.toLocaleString());

let mytimestamp = Date.now()

console.log(mytimestamp);
console.log(createdate.getTime());



//how to convert time in milli seconds 
console.log(Math.round(Date.now()/1000)); // math.round isliye use kiya kyuki decimal mai bada value aa rha tha 


let newdate = new Date()
console.log(newdate);
// fpr specific thing 
console.log(newdate.getMonth());


//customise kaise krte hai date ko 
newdate.toLocaleString('defualt',{
    weekday: "long",
})




