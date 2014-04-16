var stringDelimiter = function(stringInput,delimiter){
    if(typeof stringInput !== 'string'){
        return [];
    }
    var newArray = [];
    var starting = 0;
    for(var pos =0;pos < stringInput.length;pos++){
        if(stringInput.substr(pos,delimiter.length)===delimiter){
          newArray.push(stringInput.substring(starting,pos));
            starting = pos+delimiter.length;


        }

    }
    newArray.push(stringInput.substring(starting,pos));
    return newArray;
};