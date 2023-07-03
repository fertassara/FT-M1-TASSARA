'use strict';

function BinarioADecimal(num) {
    var decimal = parseInt(num, 2);
  return decimal;
}


function DecimalABinario(num) {
     return num.toString(2);

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
