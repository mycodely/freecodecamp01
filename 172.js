// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(list, bookName) {
  let newBookList = [...list];
  newBookList.push(bookName);
  return newBookList;
}
// Change code above this line

// Change code below this line
function remove(list, bookName) {
  let getBookList = [...list];
  const bookIndex = getBookList.indexOf(bookName);
  if (bookIndex >= 0) {
    getBookList.splice(bookIndex, 1);
    return getBookList;
  }
}
// Change code above this line
