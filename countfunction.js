// //var count =0;
// var plus = function(a,b){
//     //count++;
//     return a+b;
// }


function plus(a,b){
    // let count=0;
    // console.log(count++);
    return a+b;
}
 
function countFunc(cb){
    let count =0;
    return function(){
        cb.apply(null,arguments);
        count++;
        console.log(count);
    }
}


plus = countFunc(plus);
// addon(2,3);
// addon(1,2);
// addon(3,9);

plus(2,3);
plus(6,7);
plus(7,2); 

/* plus(2,3);
plus(6,7);
plus(7,2); */



