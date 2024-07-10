
//object literals 
//Object.create

/*
const usr = {
    name: "akansha",
    "my name": "rawat",
    age: 18,
    location:"mumbai",
    email: "rawat@google.com"
}

console.log(usr.email);
console.log(usr["my name"]); // many a times hm dot(.) use krke objects nai access kr payenge so that hm square bracket use krte hai []


// overwrite 
usr.email ="hello@gmail.com"
//lock
Object.freeze(usr)
usr.email ="hello@gmail.com"
*/
///////////////////function 
const usr = {
    name: "akansha",
    myName: "rawat",
    age: 18,
    location:"mumbai",
    email: "rawat@google.com"
}

usr.greeting = function(){
    console.log("helllooo ");
}
usr.greeting2 = function(){
    console.log(`helllooo, ${this.name} `); // this. isliye use krte just to access the usr wale function ke members ko // n hm jab 4 use krte hai toh hm 
    //"" ye use nai krte instead hm `` ye use  krte hai 
}


console.log(usr.greeting());
console.log(usr.greeting2());






