const fullname="Jahnavi Manchala";
console.log(fullname);
console.log(process.argv); //Path
const firstname=process.argv[2];
const lastname=process.argv[3];
console.log(firstname+" "+lastname)
if(process.env.NODE_ENV)