const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
console.log(
  removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10])
);
