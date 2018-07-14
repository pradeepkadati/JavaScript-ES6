
function testVar(){

  var a = 30;
  if (true){
    var a = 50;
    console.log(a);
  }
    console.log(a);
}

function testLet(){

  let a = 30;
  if (true){
    let a = 80;
    console.log(a);
  }
    console.log(a);
}
// Declare a constant with array
const colors = [];

const myName = 'pradeep';

colors.push("green");
colors.push("red");
console.log(colors);
console.log(colors.pop());

console.log(myName);

//colors = "white";
//myName = 'changing value';

testVar();
testLet();
