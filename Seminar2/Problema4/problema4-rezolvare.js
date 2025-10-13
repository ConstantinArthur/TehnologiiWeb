function IntercalateArrays(arr1,arr2)
{
    if(arr1.length !== arr2.length)
        return -1;

    let result = [];
    for(var i =0;i <arr1.length;i++)
        {
            result.push(arr1[i]);
            result.push(arr2[i]);
        }
    return result;
}

let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(IntercalateArrays(arr1,arr2).join(", "));