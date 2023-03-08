//Fusionner deux tableaux triés en un seul tableau trié :
// Exemple : mergeArrays([1,2,3,4,5], [6,7,8,9,10]) = [1,2,3,4,5,6,7,8,9,10]

const mergeArrays = (arr1, arr2) => {
  const byValue = (a, b) => a - b;
  const arr3 = arr1.concat(arr2);

  return arr3.sort(byValue);
};
console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
