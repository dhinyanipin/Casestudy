let x=[3,2,5,6,3];
let a=x[0];
let b=0;
if(a==0||a==1)
{
    b=1;
}
for(let i=2;i<=a/2;i++)
{
if(a%i==0)
{
b++;

}
}
if(b===0){
console.log("first element of the array "+x[0] +" "+"is a prime number");
}
else{
console.log("first element of the array "+x[0] +" "+"is a non prime number");
}