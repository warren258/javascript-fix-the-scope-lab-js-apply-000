function myAnimal(){
  return animal;
}
var animal = 'dog';
function yourAnimal() {
  var yourAnimal = 'cat';
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yourAnimal;
}

function add2(n) {
  return n + 2;

  // Feel free to move things around!
  const two = 2;
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = "FUNKY!";

