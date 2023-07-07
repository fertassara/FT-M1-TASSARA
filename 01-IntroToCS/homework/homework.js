'use strict';

function BinarioADecimal(num) {
    var decimal = parseInt(num, 2);
    console.log(num);
 
  return decimal;
}


function DecimalABinario(num) {
     return num.toString(2);

}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
