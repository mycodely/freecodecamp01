/*
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

v2      */

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  // find the first element in the array that is greater than or equal to num
  const index = arr.findIndex(element => element >= num);

  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 50);
