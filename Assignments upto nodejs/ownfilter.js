Array.prototype.myfilter = function(callback){

    const resultArray = [];

    for(let index=0;index<this.length;index++)
    {
        const result = callback(this[index],index,this);

        if(result)
        resultArray.push(this[index]);
        
    }
    return resultArray;
}

array = [2,3,4,8,0,9,12,13];
console.log(array.myfilter(num => num>6));