//------------SEARCHING-----------------------------------------------------

// Linear Search
function linearSearch(array, number) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === number) {
      return true;
    }
  }
  return false;
}

// Binary Search
function binarySearch(array, number) {
  let lowIndex = 0;
  let highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (array[midIndex] === number) {
      return midIndex;
    } else if (number > array[midIndex]) {
      lowIndex = midIndex;
    } else {
      highIndex = midIndex;
    }
  }
  return -1;
}

//------------SORTING-----------------------------------------------------

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

//Bubble Sort
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
      console.log(i, j);
    }
  }
  return array;
}

// Selection Sort
function selectionSort(array) {
  let length = array.length;
  let min = 0;

  for (let i = 0; i < length; i++) {
    //Set minimum to this position (current position)
    min = i;
    // Check the rest of the array to see if anything is smaller
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[i]) {
        min = j;
      }
    }
    // If the minimum isn't in the position swap it
    if (i != min) {
      swap(array, i, min);
    }
  }

  return array;
}

// Insertion Sort

// Call function
const output = selectionSort([1, 6, 8, 7, 88, 45, 9]);

console.log(output);
