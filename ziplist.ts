// Function using a loop
function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

// Functional way using Array functions (map and flatMap)
function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];
  list1.forEach((element, index) => {
    result.push(element, list2[index]);
  });
}

// Test both functions
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
