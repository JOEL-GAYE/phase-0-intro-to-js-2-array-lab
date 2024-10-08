// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);  // Modifies the original array
    return cats;
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);  // Modifies the original array
    return cats;
  }
  function destructivelyRemoveLastCat() {
    cats.pop();  // Modifies the original array
    return cats;
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();  // Modifies the original array
    return cats;
  }
  function appendCat(name) {
    return [...cats, name];  // Returns a new array, leaves the original unchanged
  }
  function prependCat(name) {
    return [name, ...cats];  // Returns a new array, leaves the original unchanged
  }
  function removeLastCat() {
    return cats.slice(0, cats.length - 1);  // Returns a new array, leaves the original unchanged
  }
  function removeFirstCat() {
    return cats.slice(1);  // Returns a new array, leaves the original unchanged
  }
          