/*// array 

const arr =[0,1,2,3,4,5]

const arr2 = new Array(1,2,3)

console.log(arr[0]);

//shallow array - direct change hota hai original data mai just 
// deep array - copy mai change hota hai just 

arr.push(6)
arr.pop() // last element ko delete kr deta hai 

arr.unshift(9) // start mai element ko add krna hai n baki ko shift krna hai toh (baki kudh se shift ho jate hai)

arr.shift()//removes the unshit ne jo dala hai usko 

console.log(arr.includes(0));
console.log(arr.indexOf(2));


///////// array to string 
const arr3= arr.join()

console.log(arr3);
console.log(arr);


//////////slice , spliice 

console.log("A", arr);
const a1 = arr.slice(1, 3)
console.log(a1);

console.log("B", arr);

const a2 =arr.splice(1,3)

console.log("C", arr);
console.log(a2);


// SLICE mai original array mai kuch change hota nai hai 
// SPLICE mai original array mai se baki element jinko hmne mention nai kiya hai voh remove ho jate haia ur baki print ho jate hai 


const arr1 = [1,2,3]
const arr2 =[4,5,6]
// concat krte samme naya arr lete hai 
const arr3 = arr1.concat(arr2) // arr1.push(arr2) use nai kr sakte since inka result will be array ke andar array 

console.log(arr3);
*/


// spread array (mtlb sab bikhar jate hai ){...}


const arr1 = [1,2,3]
const arr2 =[4,5,6]

const arr3 =[...arr1, ...arr2]
console.log(arr3);

const another =[1,2,3,[4,5,6], 7, [6,7,[8,9]]]  
const ans= another.flat(Infinity)  // infinity is the size //flat array ke andar  arrray wale elements ko ek hi array mai daal deta hai 

console.log(ans);

//// converting string into the array 
console.log(Array.isArray("AKANSHA"));
console.log(Array.from("AKANSHA"));


let s1 =0
let s2=9
let s3=8

console.log(Array.of(s1,s2,s3));
