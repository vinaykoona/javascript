let x=7.5;
function f(){

    if(x<=6.5){
        console.log("applicable for scholrshhip")
        return true;
    }else{
        console.log("it will be rejected")
        return false;
    }
}
f(x);
function schlorshp(gpa){
    const mingpa=7.5;
    if(gpa>=mingpa){
        console.log("done");
        return true;

    }else{
        console.log("rejected")
        return false;
    }
}
const studentgpa=6.5;
schlorshp(studentgpa)