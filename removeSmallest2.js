// Créer une fonction qui enleve le nombre le plus petit de la liste et renvoie la liste restante.
// Exemple : removeSmallest([1,2,3,4,5]) = [2,3,4,5]
// Exemple : removeSmallest([5,3,2,1,4]) = [5,3,2,4]

const removeSmallest = (numbers) => {
    const result = numbers.filter(number => number !== Math.min(...numbers));
      return result
      }
      console.log(removeSmallest([5,3,2,1,4]));
      console.log(removeSmallest([1,2,3,4,5]));