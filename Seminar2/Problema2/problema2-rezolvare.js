function nrDiferente(cuv1,cuv2)
{
    if(cuv1.length !== cuv2.length) return -1;
    let count = 0;
    for(let i=0;i<cuv1.length;i++)
    {
        if(cuv1[i] !== cuv2[i]) count++;
    }
    return count;
}

console.log(nrDiferente("abcde","abfde"));
console.log(nrDiferente("abcde","abfdea"));
console.log(nrDiferente("abcde","asdfg"));