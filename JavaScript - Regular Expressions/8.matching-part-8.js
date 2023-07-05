// Example 27 -> Capture Groups

// let sentence = "book book";
// let reg27X = /(\w+)\s\1/;
// let reg27X = /(\w+)\s(\w+)/;

// Testing
// let regXTestResult = reg27X.test(sentence);
// console.log(regXTestResult);

// Matching
/*
\1        -> a shorthand way for repeating what is in the paranthesis
(\w+)\s\1 -> "book book"
(\w+)     -> "book"
*/
// let regXMatchResult = sentence.match(reg27X);
// console.log(regXMatchResult);

// ---------------------------------------------------------------
let digits = "321 321 321";
let reg27X = /^(\d+)\s\1\s\1$/;
// let reg27X = /^(\d+)\s(\d+)\s(\d+)$/;

// Testing

// let regXTestResult = reg27X.test(digits);
// console.log(regXTestResult);

// Matching
/*
\1             -> a shorthand way or repeating what is in the paranthesis
(\d+)\s\1\s\1 -> "321 321 321"
(\d+)         -> "321"
*/

let regXMatchResult = digits.match(reg27X);
console.log(regXMatchResult);
