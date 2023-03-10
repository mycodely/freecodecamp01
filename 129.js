function confirmEnding(str, target) {
  const endIndex = str.length - target.length;
  
  return str.substring(endIndex) === target;
}
