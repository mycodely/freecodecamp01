Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  
  this.forEach((currentValue, index, array) => {
    newArray.push(callback(currentValue, index, array));
  });

  // Only change code above this line
  return newArray;
};
