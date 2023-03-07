// Somme des chiffres
//Écrivez un programme JavaScript qui prend un nombre entier et calcule la somme de ses chiffres. Par exemple, si l'entrée est 123, la sortie doit être 6 (1 + 2 + 3).

const sommeDesChiffres = (num) => {
  let nb = num.toString();
  let arr = nb.split("");
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += parseInt(arr[i]);
  }

  return result;
};
console.log(sommeDesChiffres(567)); // 6
