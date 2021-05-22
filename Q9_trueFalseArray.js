let array=[NaN, 0, 15, false, -22,"",undefined, 47, null];

//falsy function
function falsy(array)
{
     let output=[];
     let j = 0 ;
     for(let i=0;i<array.length;i++)
     {
     if(array[i] == undefined ||array[i] == null || array[i] == false || array[i] == 0 || array[i] == "" || array[i] == NaN)
       { output[j] = array[i];
        j++;
       }
    }
    return output;
}
console.log(falsy(array));

//truthy function
function truthy(array)
{
        return array.filter(Boolean);
}
console.log(truthy(array));