/*
function largestOfFour(arr) {
const newArr = [];

for(const subArr of arr){
  let maxNum = subArr[0];
  for(const num of subArr){
    if (num > maxNum){
      maxNum = num;
    }
  }
  newArr.push(maxNum);
}

  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); */


//v2
function largestOfFour(arr) {
  return arr.map(subArr => Math.max(...subArr));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
