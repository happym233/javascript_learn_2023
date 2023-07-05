let sentence =
  "The 11 Quick 65 brown 7210 fox _ 6054 jumps 32 over 205 the 51 lazy 103 dog really reallly @ The %% & * () []";

// -------------------------------------------------------------------------------
// Example 9 -> Getting the matched numbers & characters of alphabet with [] (the match method)

// let reg9X = /[1-3x-z]/gi; // including 1, 3, x & z
// let search9Result = sentence.match(reg9X);
// console.log(search9Result);

// -------------------------------------------------------------------------------
// Example 10 -> Getting NOT the matched numbers & characters with [] (the match method) -> Negated Character Sets

// carrot vegetable
// caret ^ (6)

// let reg10X = /[^1-9a-v ]/gi; // get everything except the ones included in []
// let search10Result = sentence.match(reg10X);
// console.log(search10Result);

// -------------------------------------------------------------------------------
// Example 11 -> Getting the matched numbers & characters that occur one or more times

// let reg11X = /l+/g;
// // let reg11X = /l/g;
// let search11Result = sentence.match(reg11X);
// console.log(search11Result);

// -------------------------------------------------------------------------------
// Example 12 -> Getting the matched characters that occur zero or more times

// let sentence2 = "goooooooooogle";

// let reg12X = /go*/;
// let search12Result = sentence2.match(reg12X);
// console.log(search12Result);

// -------------------------------------------------------------------------------
// Example 13 -> Getting the matched characters with lazy matching ?

// let reg13X = /T.*/;
// let reg13X = /T.*?/;
// let search13Result = sentence.match(reg13X);
// console.log(search13Result);

// -------------------------------------------------------------------------------
// Example 14 -> Matching the beginning string patterns

// let reg14X = /^The/i;
// let search14Result = sentence.match(reg14X);
// console.log(search14Result);

// -------------------------------------------------------------------------------
// Example 15 -> Matching the ending string patterns

// let reg15X = /The$/i;
// let search15Result = sentence.match(reg15X);
// console.log(search15Result);

// -------------------------------------------------------------------------------
// Example 16 -> Matching all letters & numbers & _

let reg16X = /\w/g; // lowercase w matches a-z & 0-9 & _
let search16Result = sentence.match(reg16X);
console.log(search16Result);
