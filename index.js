//------------SEARCHING------------

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

//------------SORTING------------

//Bubble Sort
function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

// Call function

console.log(output);
