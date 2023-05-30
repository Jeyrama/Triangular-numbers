/*
Triangular numbers are so called because of the equilateral 
triangular shape that they occupy when laid out as dots.

You need to return the nth triangular number. 
You should return 0 for out of range values:

Example:
  0 --> 0
  2 --> 3
  3 --> 6
  -10 --> 0
*/


// Solution

function triangular( n ) {
  return (n > 0) ? ((n * n) + n) / 2 : 0;
}