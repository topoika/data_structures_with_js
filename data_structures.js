let data = [5, 3, 8, 6, 7, 2];

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
};
// inserstionSort(data);
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
};

bubbleSort(data); //Time complextity = O(n^3)  Worst case scenario
