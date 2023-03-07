// Somme des chiffres
//Écrivez un programme JavaScript qui prend un nombre entier et calcule la somme de ses chiffres. Par exemple, si l'entrée est 123, la sortie doit être 6 (1 + 2 + 3).

const sommeDesChiffres = (num) => {
  return Math.abs(num % 9);
};
console.log(sommeDesChiffres(567)); // 6
