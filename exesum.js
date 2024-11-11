sum(40);
function sum(multiple){
    let c=0;
for(let i=1; i<=multiple; i++){
    if(i%3===0 || i%5===0){
          c=c+i;
           
    }
}console.log(c);
}