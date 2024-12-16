for(var counter=1 ; counter<=20; counter++) {
    console.log("hello" + counter);
}

document.querySelectorAll(".toggle")


// tougle All todos using for loop
var toggles = document.querySelectorAll(".toggle");

for(var togglepos = 0; togglepos<toggles.length; togglepos++) {
    toggles[togglepos].click();
}

//
var  doit=true

if(doit){
    console.log("done")
}

//Choose only odd numbers of array 
var toggles = document.querySelectorAll(".toggle");
for(var togglepos = 0; togglepos<toggles.length; togglepos++) {
    if(togglepos%2==1){
     toggles[togglepos].click();
    }
 }

 ////
 var toggles = document.querySelectorAll(".toggle");
 for(var togglepos = 2; togglepos<toggles.length; togglepos+=2) {
     toggles[togglepos].click();
 }
/// Tougle it with dinamic variable that change itself in the end of a loop
var toggles = document.querySelectorAll(".toggle");
var toggleit=false
for(var togglepos = 0; togglepos<toggles.length; togglepos++) {
   if(toggleit){
    toggles[togglepos].click();
   }
   toggleit=!toggleit;
}


//if \else 
var boll = true
if(boll){
    console.log("True it is")
}else{
    console.log("false indeed")
}
