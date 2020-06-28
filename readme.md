# Basic Searching and Sorting Algorithms for Arrays in Javascript (notes based on thr book "Javascript Data Structures and Algorithms" from Sammie Bea)

This script is meant to review the basic algorithms used to perform search and sort operations with arrays.

## Searching

When seachring in an array, there are two main techniques depending on whether the array is sorted.

### Linear Search

A linear search works by going through each element of the array one index after another sequentially. This algorithms has Big O notation of O(n) because in the worst scenario the entire array needs to be iterated.

Time Complexity: O(n)

### Binary Search

This method only works on sorted data. The binary search checks the middle value to see whether the desired value is grater or smaller than it. If the desire value is smaller, this algorithm can search through the smaller parts, or it can search through the bigger parts if the desire value is bigger.

Time Complexity: O(log n)

## Sorting

Sorting is one of the most important topics in computer science; it is faster and easier to locate items in sorted arrays than in an unsorted array. Efficient sorting algorithms have various trade-off that should be considered during usage.

### Bubble Sort

It is the simplest sorting algorithms. It just iterate over the entire array and swaps elements if one is bigger than the other.
