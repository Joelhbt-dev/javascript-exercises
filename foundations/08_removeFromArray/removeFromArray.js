const removeFromArray = function(arr,...rem) {

      let newArr = arr.filter((item)=> !rem.includes(item) );
      return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
