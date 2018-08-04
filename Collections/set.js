let myArray = [1,2,3,4,5,6,2,3];
// create set from array
let mySet = new Set(myArray);

console.log(mySet);

// adding to set
mySet.add('100');
mySet.add({a:1,b:2});
mySet.add({a:1,b:2});
console.log(mySet);

// remove or delete from set

mySet.delete('100');
console.log(mySet);
mySet.delete({a:1,b:2});
console.log(mySet);
mySet.delete('100');
console.log(mySet);

mySet.forEach(function (val){
    console.log(val);
});

console.log(mySet.size);