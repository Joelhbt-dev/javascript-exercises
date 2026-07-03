const repeatString = function(string,num) {

     let s = "";

    for(let i=0;i<num;i++){

        if(num){

         s = s + string;
    }

        else if(!num || num===0) {
            return "ERROR";
        }

    }

    return s;


};

// Do not edit below this line
module.exports = repeatString;
