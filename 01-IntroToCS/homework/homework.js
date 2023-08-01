'use strict';

function BinarioADecimal(num) {

   var stringSeparado = num.split('');

   var counter = 0;
   
   var sumBinario = 0;
   
   for (let i = stringSeparado.length - 1; i >= 0; i--) {
   
      let numberBinario = parseInt(stringSeparado[counter]);
   
      let productBinario = numberBinario * (2**(i));
   
      sumBinario =  sumBinario + productBinario;

      counter++;
   }

   return sumBinario;
}


function DecimalABinario(num) {

   var binarioArray = [];
   
   do {
      let divisionDecimal = num / 2;

      let restoDecimal = num % 2;

      if (restoDecimal === 0){
         binarioArray.unshift('0');
      } else {
         binarioArray.unshift('1');
      }
      
      num = divisionDecimal;
   } while (num >= 1);

   return binarioArray.join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
