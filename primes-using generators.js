const isPrimeasync = function(number){
    if(number<2)
    return false;
    if(number == 2)
    return true;
    for(let i=2;i<number;i++)
    if(number%i == 0)
    return false;

return true;
}
function *primes(min,max){
     for(i=min;i<=max;i++){
       var prime = isPrimeasync(i);
    }
    if(prime)
    yield i;
  return -1;  
}

let g = primes(1,10);

for(num of g){
    console.log(num);
}