// singleton- jo constructor banata hai single object 
 
//const gameuser = new Object() //singleton object hai 
const gameuser = {} // non singleton object 

 gameuser.id ="abc"
 gameuser.name = "akansha"
 gameuser.islogin = false 


//console.log(gameuser);

const usr ={
    email: "abc@gmail.com", // comma is must after one declaration of member 
    name:  {
        userfullname: {
            firstname: "akansha",
            lastname: "rawat"
        }
    }
   
}
//console.log(usr.name.userfullname.firstname);

//how to merge or combine objetcs 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2) // {} isliye use kiya so that to make sure voh empty curly braces mai sab rhe 

const obj3={...obj1,...obj2}
//console.log(obj3);

//database se info array ke through aata hai ! array conains many objects 
const user=[
    {
        id:1,
        email: "hello@gmail.com"
    },
    {
        id:1,
        email: "hello@gmail.com"
    },    {
        id:1,
        email: "hello@gmail.com"
    },
    {
        id:1,
        email: "hello@gmail.com"
    },
]

user[1].email
console.log(gameuser);
console.log(Object.values(gameuser)); //object mai hmne keys ya values ase nikal sakte hai 

console.log(gameuser.hasOwnProperty('islogin')); // to check kya voh function ke aandar voh key exist kr rha hai kya 




/////////////////////////////////////////////////////////////////////////////////////////////////

//destructre 

const course ={
    coursename: "js",
    price:"9999",
    instructor: "akansha"

}
//course.instructor
const {instructor} =course //destructre {} ye use krke krte hai 
console.log(instructor);


//apna kam kise aur ke sir pr dalne ko API bolte hai 
//backend pr values aati hai ..json mai 
// API object ya array ke aandar object ki form mai dekhne ko milta hai 

//{
 //   "name":"akansha",
 //   "cname": "js",
 //   "price":"999999" 
//}

[
    {

    },
    {

    },
]

