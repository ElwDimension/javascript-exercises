const palindromes = function (phrase) {
    const shortPhrase = phrase
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/\s+/g, '')
        .toUpperCase();
    return shortPhrase===reverseString(shortPhrase);  
};

function reverseString(phrase){
    let array=phrase.split("");
    let result="";
    for(let i=array.length-1;i>=0;i--){
        result+=array[i];
    }
    return result;
}

// Do not edit below this line
module.exports = palindromes;
