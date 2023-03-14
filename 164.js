function Bird() {
let weight = 15;

this.getWeight = function () {
  return weight;
 };
}

let phoenix = new Bird();
console.log(phoenix.getWeight());
