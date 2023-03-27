/*function removeFromArray(array,target){
    let result = [];
    for (let i=0;i<array.length;i++){
        
        if(array[i]!=target){
            result.push(array[i]);
        }       
    }
    return result;
}
*/

function removeFromArray(array,...args){
        let result=[];
        for (let i=0;i<array.length;i++){
            if(!args.includes(array[i])){
                result.push(array[i]);
            }
        }
        return result;
    }


// Do not edit below this line
module.exports = removeFromArray;
