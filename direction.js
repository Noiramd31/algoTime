function direction(arr) {
  let result = []; // je déclare mon tableau résultat final
  let result1 = []; // je déclare un tableau intermédaire qui me servira à compter les nord et sud
  let result2 = []; // je déclare un tableau intermédaire qui me servira à compter les est et ouest
  const counts = arr.reduce(
    (acc, direction) => {
      if (direction === "NORTH") {
        acc[0] += 1;
      } else if (direction === "SOUTH") {
        acc[1] += 1;
      } else if (direction === "EAST") {
        acc[2] += 1;
      } else if (direction === "WEST") {
        acc[3] += 1;
      }
      return acc;
    },
    [0, 0, 0, 0]
  );

  const [northCount, southCount, eastCount, westCount] = counts;

  if (northCount - southCount > 0) {
    result1 = Array.from({ length: northCount - southCount }, () => "NORTH");
  }
  if (northCount - southCount < 0) {
    result1 = Array.from({ length: southCount - northCount }, () => "SOUTH");
  }

  if (eastCount - westCount > 0) {
    result2 = Array.from({ length: eastCount - westCount }, () => "EAST");
  }
  if (eastCount - westCount < 0) {
    result2 = Array.from({ length: westCount - eastCount }, () => "WEST");
  }
  return (result = result1.concat(result2));
}

console.log(
  direction([
    "NORTH",
    "SOUTH",
    "EAST",
    "EAST",
    "SOUTH",
    "EAST",
    "NORTH",
    "WEST",
    "NORTH",
    "WEST",
  ])
);
// doit retourner ["NORTH", "EAST"]
console.log(
  direction(["NORTH", "SOUTH", "EAST", "EAST", "SOUTH", "EAST", "NORTH"])
);
// doit retourner ["EAST", "EAST", "EAST"]
