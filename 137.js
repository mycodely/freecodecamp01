function bouncer(arr) {
  let trueArr = [];

  for (let i = 0; i < arr.length; i++) {

    let boolValue = Boolean(arr[i]);
    if (boolValue) {
      trueArr.push(arr[i]);
    }
  }

  return trueArr;
}

bouncer([7, "ate", "", false, 9]);
