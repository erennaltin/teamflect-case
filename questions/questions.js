/**
 * Question 1. ( func(arr1, arr2) => [max, min] )
 *
 * max and min difference of 2 arrays
 *
 * example:
 * Given arr1 = [3,10,5], arr2 = [20,7,15,8]
 * should return [17,2] because 20 - 3 = 17, 10 - 8 = 2
 */

/*
 * Question 2. (func(a, b,c) => number)
 *
 * Should return ᐃ type:
 * 0 : if ᐃ cannot be made with given sides
 * 1 : acute ᐃ
 * 2 : right ᐃ
 * 3 : obtuse ᐃ
 * Triangle type (https://en.wikipedia.org/wiki/Law_of_cosines)
 *
 * example:
 * (2, 4, 6) ---> return 0 (Not triangle)
 * (8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
 * (3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
 * (7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
 *
 */

/*
 * Question 3 (func(a, b) => string)
 * Given 2 strings, a and b, return a string of the form short+long+short,
 * with the shorter string on the outside and the longer string on the inside.
 * The strings will not be the same length, but they may be empty ( zero length ).
 *
 * For example:
 * solution("1", "22") // returns "1221"
 * solution("22", "1") // returns "1221"
 */

/*
 * Question 4
 * Write a function that returns an array with each element representing one bit of a
 * 32 bit integer in such a way that if printed it would appear as the binary
 * representation of the integer (Least Significant Bit on the right).
 * Example:
 * 1 -> [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
 * -1 -> [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
 */

/**
 *
 * Question 5;
 * The queen can be moved any number of unoccupied squares in a straight
 * line vertically, horizontally, or diagonally, thus combining the moves
 * of the rook and bishop. The queen captures by occupying the square on
 * which an enemy piece sits.
 * (wikipedia: https://en.wikipedia.org/wiki/Queen_(chess)).
 *
 * Write a function availableMoves(position) which returns possibly moves of
 * chess queen. Returned value should be an array with possible moves sorted alphabetically, exluded starting position.
 *
 * example:
 * when input position is A1 return value should be:
 * ["A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "C1", "C3", "D1", "D4", "E1", "E5", "F1", "F6", "G1", "G7", "H1", "H8"]
 */

/*
     A   B   C   D   E   F   G   H
   + - + - + - + - + - + - + - + - +
1  | Q | x | x | x | x | x | x | x |
   + - + - + - + - + - + - + - + - +
2  | x | x |   |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
3  | x |   | x |   |   |   |   |   |
   + - + - + - + - + - + - + - + - +
4  | x |   |   | x |   |   |   |   |
   + - + - + - + - + - + - + - + - +
5  | x |   |   |   | x |   |   |   |
   + - + - + - + - + - + - + - + - +
6  | x |   |   |   |   | x |   |   |
   + - + - + - + - + - + - + - + - +
7  | x |   |   |   |   |   | x |   |
   + - + - + - + - + - + - + - + - +
8  | x |   |   |   |   |   |   | x |
   + - + - + - + - + - + - + - + - +
   
Q = queen
x = available move

*/
