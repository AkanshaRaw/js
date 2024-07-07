const name = "akansha"
const repocount=50

console.log(`hello my name is ${name} and my repo count is ${repocount}`);


const gamename = new String (`akasnhaaa-hi-helloo-hwo`)

console.log(gamename[0]);
console.log(gamename.__proto__); // prototype :string 


console.log(gamename.length);
console.log(gamename.toUpperCase());

console.log(gamename.charAt(3));
console.log(gamename.indexOf ('a'));


const news = gamename.substring(0,5) // negative value nai dal saktee hai ..eventually zero se start hoga 
console.log(news);



const another= gamename.slice(-8,4)
console.log(another);


const anotherstrin= "   akanshaa     "
console.log(anotherstrin);
console.log(anotherstrin.trim()); // starting or ending space hata dete hai ,,,white space remove krta hai 


const url ="https://akansha.com"
console.log(url.replace('com','wow'));
console.log(url.includes('akansha'));



console.log(gamename.split ('-')); // array mai change kr deta hai string ko 


