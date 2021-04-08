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

const findPrimes = async (min,max,callback) => {


    let primes = []; //to hold all prime values
    let lo = min;

    let hi = Math.min(lo+1000,max); // in one batch I will do 1000 or upto max,whiever is less 
    console.log(hi,max)
    
    let iid = setInterval(() =>{

        for(let i=lo;i<hi;i++)
        if(isPrimeasync(i))
        primes.push(i);

        lo=hi;
        hi=Math.min(lo+100,max);
        if(lo>=max){
            //time to finish
            clearInterval(iid);
            //now I must return the result
            console.log(primes);
            callback(primes);
            // callback(primes); // call the callback an send information to the client

        }
    },1); // 1 ms just gives someone else waiting to run

}


async function testFindPrimes(min,max){
    await findPrimes(min,max,primes => console.log(`Total primes between ${min}-${max} is ${primes.length}`));
    console.log(`finding primes between ${min}-${max}...`);
}


testFindPrimes(2,10000); //should finish second
testFindPrimes(2,100000); //should finish last
testFindPrimes(2,100); //should finish first