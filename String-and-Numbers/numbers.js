// hexa decimal number
console.log(0xFF);

// binary numbers
console.log(0b101);

// octa decimal numbers
console.log(0o2345);

console.log(Number.isFinite(3));
console.log(Number.isFinite(-3));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));

console.log('------- NaN--------');
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(3));
console.log(Number.isNaN(Infinity));
console.log('-------------------');

console.log('------- Integer--------');
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(3));
console.log(Number.isInteger(Infinity));
console.log('-------------------');