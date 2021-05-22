let array=[1,2,3,4];
const newArray=array.map(n => n*2); 

/*second method
const newArray=array.map(n => { 
    const output=[];
    for(let i=0;i<array.length;i++)
    output[i]= array[i]*2;
    return output;
 });
*/

console.log(newArray);