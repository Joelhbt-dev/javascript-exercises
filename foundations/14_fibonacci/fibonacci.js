const fibonacci = function(num) {

    if(num == 0){

        return 0;
    }

    else if(num<0){

        return "OOPS";
    }

    num = Number(num);

    let arr = [];
    arr[0]=1;
    arr[1]=1;

    for(let i=2;i<=num;i++){

        arr[i] = arr[i-1] + arr[i-2];

    }


    return arr[num-1];

};

// Do not edit below this line
module.exports = fibonacci;
