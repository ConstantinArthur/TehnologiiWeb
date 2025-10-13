function occurences(text,character)
{
    let count = 0;
    for(let i=0;i<text.length;i++)
    {
        if(text[i] === character) count++;
    }
    return count;
}
console.log(occurences("sample text","e"));