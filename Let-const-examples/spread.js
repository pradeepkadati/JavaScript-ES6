const numbers = [1,2,3];
const newNumbers = [...numbers,4,5];

console.log(newNumbers);

const obj = {
    name:'pradeep'
};

const newObj = {
    ...obj,
    age:34
};

console.log(newObj);
