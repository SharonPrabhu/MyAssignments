//to Print o/p in single line

/* let result ="";
for(let i=0; i <= 30; i++)
{
    if(i % 2 !== 0)
    {   
        result+= i +" ";
    }
}
console.log("The odd numbers are:", result)
    
let odd = "";
let Even = "";
for(let i=0; i <= 25; i++)
{
    if(i % 2 !== 0)
    {   
        odd+= i +" ";
    }
   else {
         Even+= i +" ";
    }
}
console.log("The odd numbers are:", odd);
console.log("The odd numbers are:", Even);
*/
for(let i=0; i <= 30; i++)
{
    if(i % 2 !== 0)
    {   
        console.log("The odd numbers are:", i)    
    }
}

for(let i=0; i <= 25; i++)
{
    if(i % 2 !== 0)
    {   
        console.log("The odd numbers are:", i)    
    }
    else{
        console.log("The even numbers are:", i) 
    }
}