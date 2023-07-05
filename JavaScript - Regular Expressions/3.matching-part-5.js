let sentence =
  "The 11 Quick 65 brown 7210 fox _ 6054 jumps 32 over 205 the 51 lazy 103 dog really reallly @ The %% & * () [] {} - + = * /";

// -------------------------------------------------------------------------------
// Example 17 -> Matching all non-letters & non-numbers & not _

// let reg17X = /\W/g; // the uppercases W matches everything that is not (a-z) & (0-9) & _
// let search17Result = sentence.match(reg17X);
// let search17Result = sentence.match(reg17X).length;
// console.log(search17Result);

// -------------------------------------------------------------------------------
// Example 18 -> Matching all numbers

// let reg18X = /\d/g;
// let search18Result = sentence.match(reg18X);
// let search18Result = sentence.match(reg18X).length;
// console.log(search18Result);

// -------------------------------------------------------------------------------
// Example 19 -> Matching all non-numbers

// let reg19X = /\D/g;
// // let search19Result = sentence.match(reg19X);
// let search19Result = sentence.match(reg19X).length;
// console.log(search19Result);

// -------------------------------------------------------------------------------
// Example 20 -> Matching all the whitespace (space, enter, tab etc)

let reg20X = /\s/g;
let search20Result = sentence.match(reg20X);
// let search20Result = sentence.match(reg20X).length;
console.log(search20Result);
