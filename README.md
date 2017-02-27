# Core Algorithms

Tests and implementations for algorithms commonly used in job interviews. See the full list in the [algorithms.md](algorithms.md) file.

Base repository for the [Core Algorithms](https://github.com/GuildCrafts/web-development-js/issues/123) goal.

## Installation and Setup

1. git clone 
2. npm i

## Usage and Examples
1. npm t
Link to Big O time complexities: http://bigocheatsheet.com/


## Sorting and Searching

#### [x] mergeSort

Sort an array of numbers using the **merge sort** algorithm.

```javascript
mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

- [x] bubbleSort

Sort an array of numbers using the **bubble sort** algorithm.

```javascript
bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

- [] binarySearch

Search for a number within an array using the **binary search** algorithm.

```javascript
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
binarySearch(numbers, 45)
// => 8
```


## Graphing and Geometry

- []closestPair

Given a set of points on a 2-dimensional plane, return the pair of points with the least distance between them.

Reference: [Wikipedia](https://en.wikipedia.org/wiki/Closest_pair_of_points_problem)

```javascript
const points = [
  [2,1],
  [4,0],
  [-1,0],
  [5,3],
  [-2,5],
  [3,-3],
  [-2,0],
  [3,4],
  [5,-4],
  [0,-2]
]
closestPair(points)
// => { pair: [[-1, 0], [-2, 0]], distance: 1 }
```

- []isConnectedGraph

Check if a graph is connected or disconnected. Return `true` or `false`.

A graph is connected when there is a path between every pair of vertices.

Reference: [Wikipedia](https://en.wikipedia.org/wiki/Connectivity_(graph_theory))

```javascript
const graphA = {
  'a': ['b', 'c'],
  'b': ['a', 'd'],
  'c': ['a', 'd'],
  'd': ['b', 'c'],
}
isConnectedGraph(graphA)
// => true

const graphB = {
  'a': ['b'],
  'b': ['a'],
  'c': ['d'],
  'd': ['c'],
}
isConnectedGraph(graphB)
// => false
```
