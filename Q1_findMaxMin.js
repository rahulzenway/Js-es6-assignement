let array= [1,2,3,4,5];

// with using reduce method
//const maxx = array.reduce((a,b) => Math.max(a,b));
//console.log(maxx);


// not working
// const maxx= (() => Math.max(...array));
// console.log(maxx);

console.log(Math.max(...array));
console.log(Math.min(...array));
