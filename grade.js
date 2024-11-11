let marks=[91,79,79,56,86];
grades(marks);
function grades(output){
    let c=0;
    let grade;
for(let mark of output){
    c=c+mark;
}
grade = c*100/500;
if(grade>=1 && grade<=59)
    console.log("your grade is F");
if(grade>=60 && grade<=69)
    console.log("your grade is D");
if(grade>=70 && grade<=79)
    console.log("your grade is C");
if(grade>=80 && grade<=89)
    console.log("your grade is B");
if(grade>=90 && grade<=100)
    console.log("your grade is A");

}