const sumAll = function(a,b) {

    sum = 0;

    if ((Number.isInteger(a) && a>0) && (Number.isInteger(b) && b>0)){

             if(a<b){

        for(i=a;i<=b;i++){

            sum = sum + i;

        }
    }

    else if(a>b){

        for(i=a;i>=b;i--){

            sum = sum + i;
        }
    }
        }
    

    else {

        return "ERROR";
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
