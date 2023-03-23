function reverseString(phrase){
    let array=phrase.split("");
    let result="";
    for(let i=array.length-1;i>=0;i--){
        result+=array[i];
    }
    return result;
}

// Do not edit below this line
module.exports = reverseString;
