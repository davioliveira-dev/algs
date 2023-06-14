// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9],
// ];

const arr = [
  [1, 2, 3],
  [4, 2, 6],
  [9, 8, 3],
];

let leftToRightSum = 0;
let rightToLeftSum = 0;

arr.forEach((item, currentIndex) => {
  leftToRightSum += item[currentIndex];
  const lastItem = item[item.length - 1];
  const lastItemIndex = item.lastIndexOf(lastItem);
  rightToLeftSum += item[lastItemIndex - currentIndex];
});

let leftToRightSumFor = 0;
let rightToLeftSumFor = 0;

for (let i = 0; i < arr.length; i++) {
  const lastItem = arr[i][arr[i].length - 1];

  for (let j = 0; j < arr[i].length; j++) {
    if (i === j) {
      leftToRightSumFor += arr[i][j];
    }

    const isLastItemNotRepeated = j + 1 === arr[i].length;

    if (isLastItemNotRepeated && arr[i][j] === lastItem) {
      rightToLeftSumFor += arr[i][j - i];
    }
  }
}

console.log("leftToRightSum", leftToRightSum);
console.log("rightToLeftSum", rightToLeftSum);

console.log("leftToRightSumFor", leftToRightSumFor);
console.log("rightToLeftSumFor", rightToLeftSumFor);
