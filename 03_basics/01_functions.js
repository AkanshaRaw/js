function addd(num1, num2){ //parameter num1 n num2
 let res = num1+num2
 return res
}

const result =addd(5,6)//arguments 5  6
//console.log(result);



function login(username){
    return `${username} has logged in `
}
//console.log(login("akansha"));

function calculateprice(val1, val2,...num1) { // ... is a rest operator  
    return num1
}
 
console.log(calculateprice(299,75,23,242,232));



const user ={
    name:"akasnahd",
    price:9999
}

function handle(anyobject){
    console.log(`username is ${anyobject.name} and the price is ${anyobject.price}`);
}

handle(user)