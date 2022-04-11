const bubbleSort = (data) => {
  for (let i = data.length - 1; i > 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  console.log(data);
};

let data = [4, 3, 6, 6, 7, 9, 2, 1];
console.log(data);
bubbleSort(data);

const binarySearch = (data, target) => {
  let leftIndex = 0;
  let rightIndex = data.length - 1;
  let middleIndex = 0;
  while (leftIndex <= rightIndex) {
    middleIndex = Math.floor((rightIndex + leftIndex) / 2);
    let midNumber = data[middleIndex];
    if (midNumber == target) {
      return middleIndex;
    } else if (midNumber < target) {
      leftIndex = middleIndex + 1;
    } else if (midNumber > target) {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
};
