'use strict'
// memoizing html id elements ie. document.querySelector("#pickles")


let memoize = () => {
  const cached = {};
  let result;
  return (elementId) => {
    if(elementId in cached){
      console.log('from cache');
      return cached[elementId];
    }
    else if (result = document.querySelector(elementId) || document.getElementById(elementId)){
      console.log('finding result');
      cached[elementId] = result;
      console.log(cached)
      return result;
    }
  }
};
memoize('pickle');
memoize('pickle');
memoize('pickles');