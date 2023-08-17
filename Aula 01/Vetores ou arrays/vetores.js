// O que são vetores ou arrays


// Como declarar um array : 

/*let array = ['string', 1, true];
console.log(array);*/

// Pode guardar varios tipos de dados 

let array = ['string', 1, true, ['array1'], ['array2'] , ['array3'], ['array4'] ];
console.log(array);

// Metodos arrays para se manipulá- lo 

/* Ao ser DECLARADO , o ARRAY traz consigo uma série de metodos para manipula-los .
   EXEMPLOS:

   forEach() -  itera um array
   push() - add item no final do array;
   pop() - remove item no final do array;
   shift() - remove item no inicio do array;
   unshift() - add item no inicio o array;
   indexOf() - retorna o indice de um valor;
   splice() - remove ou substitui um item pelo índice;
   slice() - retorna uma parte de um array existente; 

*/


// forEach :

array.forEach(function(item, indice){console.log(item, indice)});

//  push :

array.push([]);
console.log(array);

// pop :

array.pop();
console.log(array);

// shift :
array.shift();
console.log(array);

// unshift :

array.unshift('novo item no inicio')
console.log(array);

// indexOf
console.log(array.indexOf(true));

// splice 
array.splice(0,3);
console.log(array);

// slice

let novoArray = array.slice(0, 3);
console.log(novoArray);














