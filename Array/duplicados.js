/* Method 1 */

/*
const numeros = [5, 1, 2, 2, 7, 3, 4, 4, 7, 6];
const tempArray = [...numeros].sort();
let duplicados = [];

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i] === tempArray[i + 1]) {
    duplicados.push(tempArray[i]);
  }
}

console.log(duplicados)
*/

/* Method 2 */
const numeros = [5, 1, 2, 2, 7, 3, 4, 4, 7, 6];
const numerosUnicos = [...new Set(numeros)];

let duplicados = [...numeros];
numerosUnicos.forEach((numero) => {
  const indice = duplicados.indexOf(numero);
  duplicados = duplicados
    .slice(0, indice)
    .concat(duplicados.slice(indice + 1, duplicados.length));
});

console.log(duplicados);
