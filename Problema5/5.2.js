const sampleDictionary = ['este'];
const sampleText = "javascript este minunat";

const censorText = (text, dictionary) => {
    const words = text.split(' ').filter(e => e.trim());
    
    const censoredWords = words.map(word => {
        if (dictionary.includes(word)) {
            if (word.length > 2) {
                return word[0] + '*'.repeat(word.length - 2) + word[word.length - 1];
            } else {
                return word;
            }
        } else {
            return word;
        }
    });
    return censoredWords.join(' ');
};

console.log(censorText(sampleText, sampleDictionary));