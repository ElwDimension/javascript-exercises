const fibonacci = function(x) {
    x=Number(x);
    if(x<0){return "OOPS";}

    let sum=1;
    let first=0;
    let second=1;
    for (let i=1;i<x;i++){
        sum=first+second;
        first=second;
        second=sum;
    }
    return sum;
    

};

// Do not edit below this line
module.exports = fibonacci;
