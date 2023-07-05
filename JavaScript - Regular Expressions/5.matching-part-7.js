let sentence =
  "The 11 Quick 65 brown 7210 fox _ 6054 jumps 32 over 205 the 51 lazy 103 dog really reallly @ The %% & * () [] {} - + = * / google yeeeeeeeeah";

// -------------------------------------------------------------------------------
// Example 25 -> check for all or none

// let sentence2 = "colour";
// let sentence2 = "color";

// let reg25X = /colou?r/;
// let reg25X = /colour/;
// let reg25X = /color/;
// let search25Result = reg25X.test(sentence2);
// console.log(search25Result);

// -------------------------------------------------------------------------------
// Example 26

// *-*-*-*-Positive lookahead -> testing for a +ve condition to be true

// let reg26X = /j)(?=u/;
// let reg26X = /j(?=o)/;
// let reg26X = /j(?=m)/;
// let search26Result = reg26X.test(sentence);
// console.log(search26Result);

// *-*-*-*-Negative lookahead -> testing for a -ve condition to be true

let reg26X = /j(?!m)/;
// let reg26X = /j(?!u)/;
let search26Result = reg26X.test(sentence);
// let search26Result = sentence.match(reg26X);
console.log(search26Result);
