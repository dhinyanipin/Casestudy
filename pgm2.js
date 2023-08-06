let x=['orange','apple','grape','apple','coconut','apple','coconut','coconut','coconut'];
let a=1;
let c="";
for (let i=0;i<(x.length-1);i++)
{
    let b=1;
 for (let j=i+1;j<x.length;j++)
   {
    if(x[i]==x[j])
    b++;
    if(b>a){
        a=b;
     c=x[i];
    }
     
 }

}
console.log("Most frequent item is"+" " +c +","+a+" "+"times repeated.");