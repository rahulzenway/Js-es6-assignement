let array1 = [1,2,3];
let array2 = [2,30,1];

function mergeArray(array1,array2)
{
const newMergeArray = array1.concat(array2);

const output = newMergeArray.filter((a,b) => newMergeArray.indexOf(a) ===b);
return output;
}
console.log(mergeArray(array1,array2));