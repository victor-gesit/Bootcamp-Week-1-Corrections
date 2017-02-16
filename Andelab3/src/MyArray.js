function MyArray(){
  Array.prototype.toTwenty = function(){
    const twenties = [];
    for(var i = 1; i <=20; i++){
      twenties.push(i);
    }
    return twenties;
  };
  Array.prototype.toForty = function(){
    const forties = [];
    for(var j = 2; j<=40; j+=2){
      forties.push(j);
    }
    return forties;
  };

  Array.prototype.toOneThousand = function(){
    const thousands = [];
    for(var k = 10; k <= 1000; k+=10){
      thousands.push(k);
    }
    return thousands;
  };


  Array.prototype.search = function(target){

  const result = {};
  result.count = 0;
  result.index = -1;
  result.length = this.length;
  
  var counter= 0;
    
  let low = 0;
  let high = this.length - 1;

  if(target === this[this.length-1]){
    result.index = this.length - 1;
    return result;
  }

  while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = this[mid];
  
        if (guess === target) {
            result.count = counter;
            result.index = mid;
        }
        if (guess > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
        counter +=1;
      }
    
    return result;
  }
  Array.prototype.indexOf = function () {
    throw new Error('You are not allowed to use the indexOf function');
  };
}