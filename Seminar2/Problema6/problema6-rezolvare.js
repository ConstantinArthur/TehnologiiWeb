const sampleString = 'Arthur'

const getLettersCounts = (text) => {
    const result = {};
    let totalLetters = 0;

    for (let letter of text)
    {
        if(letter!==' ')
        {
            if (letter in result)
            {
                result[letter]++;
            }
            else
            {
                result[letter] = 1;
            }
            totalLetters++;
        }
    }

    for(let letter in result)
    {
        result[letter] /= totalLetters;
    }
    return result;
}

console.log(getLettersCounts(sampleString))