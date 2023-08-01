function sumArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array.');
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        throw new Error('Invalid Element');
      }
      sum += arr[i];
    }
  
    return sum;
}

console.log(sumArray([1,2,3,4]))