function factorialize(num) {
  let arr = Array.from({ length: num }, (_, i) => i + 1); // create an array from 1 to num
  return arr.reduce((a, b) => a * b, 1); // multiply all the elements of the array
}

factorialize(5);
