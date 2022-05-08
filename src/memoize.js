const memoize = function(fn){
  const cache = {};
  return function(){
    //arg as key to store the result
    const KEY = JSON.stringify(arguments);
    
    //if the result is present for the given key return it
    if (cache[KEY]) {
      return cache[KEY]
    }
    
    //else compute and store the result and return the result
    const evaluatedValue = fn(...arguments);
    cache[KEY] = evaluatedValue;
    return evaluatedValue;
  }
};


Input:
function factorial(n) {
   if(n === 0 || n === 1) {
     return 1
   }
   return factorial(n-1) * n; 
}

const memoizedFactorial = memoize(factorial)
let a = memoizedFactorial(100) // slow
console.log(a);
let b = memoizedFactorial(100) // faster
console.log(b);

Output:
9.33262154439441e+157 // slow
9.33262154439441e+157 // faster