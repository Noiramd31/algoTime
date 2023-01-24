 // Créer une fonction qui prend un nombre qui représente le nombre de tours d'un jeu de roulette et renvoie un tableau avec les numéros de chaque tour.
//exemple : roulette(5) ➞ [1, 2, 3, 4, 5]



const roulette = (num) => {
const arr = []
for (let i=1; i<=num; i++ ){
    arr.push(i)
}
return arr
}
console.log(roulette(35));