/* 
function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice(0, n);
  result.push(...arr1);
  result.push(...arr2.slice(n));
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
*/

function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
