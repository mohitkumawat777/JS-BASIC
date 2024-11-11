speed(999);

function speed(meter){
let speedlimit=70;
let getpoint=5;
if(meter<speedlimit+getpoint){
    console.log("speed is ok");
}
else{
    let points =Math.floor((meter-speedlimit)/getpoint);
      if(points<=12){
        console.log("points ",points);
    }
   else{
        console.log("license suspended");
   }
    }

}