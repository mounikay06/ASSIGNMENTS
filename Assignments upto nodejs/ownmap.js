

Array.prototype.mymap = function(callback){
  const resultArray = [];
  for(let index=0;index<this.length;index++){
      resultArray.push(callback(this[index],index,this));
  }
  return resultArray;
}
//[1,2,3].mymap();
Array = [1,2,3,4,5];
console.log(Array.mymap(num => num*5));