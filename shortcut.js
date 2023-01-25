 // Créez une fonction appelée raccourci pour supprimer les voyelles minuscules (a, e, i, o, u ) dans une chaîne donnée.

// exemple :
// // "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"


function shortcut (string) {
//   const arr = string.split('')
    const result = string
    .split('')
    .filter(e =>  (e !='a') && (e != 'e') &&(e !='i') && (e != 'o')&& (e != 'u'))
    .join('')

  return result
}
console.log(shortcut("hello"));
console.log(shortcut("codewars")); 
console.log(shortcut("goodbye")); 
console.log(shortcut("HELLO")); 