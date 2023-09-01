function sum(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input should be an array of numbers');
    }
  
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  module.exports = {
    sum,
  };