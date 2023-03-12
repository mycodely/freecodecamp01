function mutation(arr) {
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();
  
  return [...str2].every((char) => str1.includes(char));
}
mutation(["hello", "hey"]);
