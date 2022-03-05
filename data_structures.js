let data = [5, 3, 8, 6, 9, 7, 2];

const inserstionSort = (data) => {
  // console.timeLog();
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
inserstionSort(data);
// O(N^2) Quadratic

const bubbleSort = (data) => {
  for (let i = 1; i <= data.length; i++) {
    //O(n)
    for (let j = i; j > 0; j--) {
      //O(n)
      if (data[j] < data[j - 1]) {
        //O(n)
        let less = data[j];
        data[j] = data[j - 1];
        data[j - 1] = less;
      }
      console.log(data);
    }
  }
  binarySearch(data);
};

const binarySearch = (data) => {
  let beggining = 0;
  let n = data.length;
  let searched = 6;
  let middle = 0;
  while (data[middle] != searched) {
    middle = (n - beggining) / 2;
    if (data[middle] != searched) {
      beggining = middle;
    } else {
      console.log("go the the number at " + middle);
    }
  }
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

let numbers = [2, 4, 5, 4];
getSums(numbers, 8);

// bubbleSort(data); //Time complextity = O(n^3)  Worst case scenario
