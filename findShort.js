 // Crée une fonction qui renvoie la longueur du ou des mots les plus courts.

// La chaîne ne sera jamais vide et vous n'avez pas besoin de tenir compte des différents types de données.

// exemple : 
// findShort("Prachett is the best author in the world ") // 2

function findShort(sentence){
const arr = sentence.split(' ')
const result =[]
for (let i = 0; i< arr.length;i++) {
    result.push(arr[i].length)
   }
   console.log(result)
return Math.min(...result)
}
console.log(findShort("Prachett is the best author in the world"));
