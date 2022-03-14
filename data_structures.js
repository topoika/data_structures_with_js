let data = [5, 3, 8, 6, 9, 7, 2];

const inserstionSort = (data) => {
  for (let i = 1; i < data.length; i++) {
    let current = data[i];
    let j = i - 1;
    while (j >= 0 && data[j] > current) {
      data[j + 1] = data[j];
      j--;
    }
    data[j + 1] = current;
  }
  console.log(data);
};
// inserstionSort([8, 2, 6, 7, 8]);
// O(N^2) Quadratic

const bubbleSort = (data) => {
  for (let i = 1; i <= data.length; i++) {
    //O(n)
    for (let j = i; j > 0; j--) {
      //O(n)
      if (data[j] < data[j - 1]) {
        let less = data[j];
        data[j] = data[j - 1];
        data[j - 1] = less;
      }
      console.log(data);
    }
  }
  binarySearch(data);
};

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

//Search for two numbers in an array that adds up to the target

const getSums = (data, target) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] + data[j] == target) {
        console.log([i, j]);
      }
    }
  }
};

let numbers = [1, 2, 4, 5, 6, 8, 9, 10, 14, 16];
// getSums(numbers, 8);
// binarySearch(numbers, 14);
// console.log(
//   "The tager number is in index " + binarySearch(numbers, 2) + " in the array"
// );
// // bubbleSort(data); //Time complextity = O(n^3)  Worst case scenario
const fizzBuzz = (range) => {
  let arr = [];
  for (let i = 1; i <= range; i++) {
    if (i % 3 == 0) {
      arr[i] = "Fizz";
    }
    if (i % 15 == 0) {
      arr[i] = "Buzz";
    }
    if (i % 3 == 0 && i % 15 == 0) {
      arr[i] = "FizzBuzz";
    }
  }
  console.log(arr);
};
// fizzBuzz(100);

const selectionSort = (data) => {
  for (let i = 1; i < data.length - 1; i++) {
    let minIndex = 1;
    for (let j = i + 1; j < numbers; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }
    let current = data[i];
    data[i] = data[minIndex];
    data[minIndex] = current;
  }
  console.log(data);
};

selectionSort(data);
const fibonacciSearch = (data, target) => {
  fib1 = 0;
  fib2 = 1;
  fibm = fib1 + fib2;
  while (data[fibm] != target && fib2 < data.length) {
    fib1 = fib2;
    fib2 = fibm;
    fibm = fib1 + fib2;
    console.log(data[fibm]);
    return data[fibm];
  }
};

// fibonacciSearch(numbers, 9);
