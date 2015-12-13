INSERT INTO
  users
VALUES
  ( default, 'Rachel Goof', 'rachelgimp@example.com', 'fruitloops', null ),
  ( default, 'Richard Levy', 'richardlevy@example.com', 'down', null ),
  ( default, 'Lynold Friedman', 'lynoldfriedman@example.com', 'up', null ),
  ( default, 'Mary Cariah', 'marycariah@example.com', 'red', null ),
  ( default, 'Tom Strongholde', 'tomstrongholde@example.com', 'blue', null ),
  ( default, 'Sally Rallycaps', 'sallyrallycaps@example.com', 'green', null );

INSERT INTO
  questions
VALUES
  (default, 'URLify', 'Write a method to replace all spaces in a string with "%20". You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.', 'function URLify() {
  return "answer";
}', 'testHere'),
  (default, 'Rotate Matrix', 'Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?', 'function rotateMatrix() {
  return "answer";
}', 'testHere'),
  (default, 'Partition', 'Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x.', 'function partition() {
  return "answer";
}', 'testHere'),
  (default, 'Sort Stack', 'Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.', 'function sortStack() {
  return "answer";
}', 'testHere'),
  (default, 'Minimal Tree', 'Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.', 'function minimalTree() {
  return "answer";
}', 'testHere'),
  (default, 'Next Number', 'Given a positive integer, print the next smallest and the next largest number that have the same number of 1 bits in their binary representation.', 'function nextNumber() {
  return "answer";
}', 'testHere'),
  (default, 'Jukebox', 'Design a musical jukebox using object-oriented principles.', 'function jukebox() {
  return "answer";
}', 'testHere'),
  (default, 'Eight Queens', 'Write an algorithm to print all ways of arranging eight queens on an 8x8 chess board so that none of them share the same row, column or diagonal. In this case, "diagonal" means all diagonals, not just the two that bisect the board.', 'function eightQueens() {
  return "answer";
}', 'testHere'),
  (default, 'Search in Rotated Array', 'Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. You may assume that the array was originally sorted in increasing order.', 'function searchRotated() {
  return "answer";
}', 'testHere'),
  (default, 'Peaks and Valleys', 'In an array of integers, a "peak" is an element which is greater than or equal to the adjacent integers and a "valley" is an element which is less than or equal to the adjacent integers. For example, in the array [5, 8, 6, 2, 3, 4, 6], {8, 6} are peaks and {5, 2} are valleys. Given an array of integers, sort the array into an alternating sequence of peaks and valleys.', 'function peaksAndValleys() {
  return "answer";
}', 'testHere');

INSERT INTO
  answers
VALUES
  (default, 'answerCode1', 'answerDescription1'),
  (default, 'answerCode2', 'answerDescription2'),
  (default, 'answerCode3', 'answerDescription3'),
  (default, 'answerCode4', 'answerDescription4'),
  (default, 'answerCode5', 'answerDescription5'),
  (default, 'answerCode6', 'answerDescription6'),
  (default, 'answerCode7', 'answerDescription7'),
  (default, 'answerCode8', 'answerDescription8'),
  (default, 'answerCode9', 'answerDescription9'),
  (default, 'answerCode10', 'answerDescription10'),
  (default, 'answerCode11', 'answerDescription11'),
  (default, 'answerCode12', 'answerDescription12'),
  (default, 'answerCode13', 'answerDescription13'),
  (default, 'answerCode14', 'answerDescription14'),
  (default, 'answerCode15', 'answerDescription15');

-- INSERT INTO
--   company_answers
-- VALUES
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode2')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode3')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode5')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode6')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode7')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode9')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode10')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode12')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode13')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode14')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode15'));

-- INSERT INTO
--   user_answers
-- VALUES
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM users WHERE email = 'rachelgimp@example.com'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode1')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM users WHERE email = 'lynoldfriedman@example.com'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode4')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM users WHERE email = 'marycariah@example.com'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode11')),
--   (default,
--    (SELECT id FROM questions WHERE name = 'Matt Damon'),
--    (SELECT id FROM users WHERE email = 'sallyrallycaps@example.com'),
--    (SELECT id FROM answers WHERE answerCode = 'answerCode8'));

