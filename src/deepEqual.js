const deepEqual = (a,b) => {
	if(a === b ) {
  	return true;
  } else if (a && b && typeof a === "object" && typeof b === "object" &&
   Object.keys(a).length === Object.keys(b).length) {
    for(let key in a) {
    	if(b.hasOwnProperty(key)) {
      	if(!deepEqual(a[key], b[key])) {
          return false;
        }
      } else {
      	return false;
      }
    }
    return true
  }
  return false;
}


const deepEquals = (valueOne, valueTwo) => {
  if (typeof valueOne !== 'object' && typeof valueTwo !== 'object') {
    const isValueOneNaN = typeof valueOne === 'number' && isNaN(valueOne);
    const isValueTwoNaN = typeof valueTwo === 'number' && isNaN(valueTwo);

    if (isValueOneNaN && isValueTwoNaN) return true;

    return valueOne === valueTwo;
  }

  if (typeof valueOne !== typeof valueTwo) return false;

  if (valueOne === null || valueTwo === null) return valueOne === valueTwo;

  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) {
      return false;
    }
    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEquals(valueOne[i], valueTwo[i])) return false;
    }
    return true;
  }
  
  if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;
  if (valueOne === valueTwo) return true;

  const valueOneKeys = Object.keys(valueOne);
  const valueTwoKeys = Object.keys(valueTwo);

  if (valueOneKeys.length !== valueTwoKeys.length) return false;
  if (!deepEquals(valueOneKeys, valueTwoKeys)) return false;


  for (let i = 0; i < valueOneKeys.length; i++) {
    const key = valueOneKeys[i];
    if (!valueTwo.hasOwnProperty(key)) return false;
    const valueOneValue = valueOne[key];
    const valueTwoValue = valueTwo[key];
    if (!deepEquals(valueOneValue, valueTwoValue)) return false;
  }

  return true;
}