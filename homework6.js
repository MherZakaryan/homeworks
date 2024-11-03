//Given an object. Invert it (keys become values and values become keys)

function replaceKeysWithValues(obj) {
    let result = {} ;
    let resKey ;
    let resValue ;
    for(let key in obj){
        resKey = obj[key] ;
        resValue = key ; 
        result[resKey] = resValue ;
    }
    return result;
}