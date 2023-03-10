function findLongestWordLength(str) {
  const words = str.split(' ');
  let maxLength = 0;
  for (const word of words) {
    maxLength = Math.max(maxLength, word.length);
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
