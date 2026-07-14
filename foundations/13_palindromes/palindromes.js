const palindromes = function (str) {

     const newStr = str.replace(/[^a-zA-Z0-9]/g, '');      // Regex used to clean the string

    const arr = newStr.split('');

    let palin = '';

    for(let i=arr.length-1;i>=0;i--){
         palin = palin + arr[i];
    }

    if(palin.toLowerCase()===newStr.toLowerCase()){
        return true;
    }
    
    else{

        return false;
    }



};

// Do not edit below this line
module.exports = palindromes;
