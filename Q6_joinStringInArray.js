const array=["Red","Green","White","Black"];
console.log(array.toString());
console.log(array.join());
console.log(array.join('+'));

//second method
function joinF(array,addE)
{
    let output= '';
    for(let i=0;i<array.length;i++)
    {
        if(i!=array.length-1)
        output += array[i]+addE;
        else
        output +=array[i];
    }
return output;
}
console.log(joinF(array,'+'));
//