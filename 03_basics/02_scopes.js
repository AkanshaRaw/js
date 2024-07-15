// var use ni krte kyuki scope ka problem create krta hai 
// let n const 
let a=300 // gloabal scope

if(true){
    let a=10
    const b=9
   // console.log("a", a);
}
//console.log(a);

//nested scope
function one (){
    const name="akansha"

    function two(){ //under ke function bhar  ke function ko access kr sakte hai 
        const age =19
        console.log(name);
    }
    //console.log(age);
    two()
}
one()
