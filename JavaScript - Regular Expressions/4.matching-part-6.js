let sentence =
  "The 11 Quick 65 brown 7210 fox _ 6054 jumps 32 over 205 the 51 lazy 103 dog really reallly @ The %% & * () [] {} - + = * / google yeeeeeeeeah";

// -------------------------------------------------------------------------------
// Example 21 -> Matching all the non whitespace (space, enter, tab etc)

// let reg21X = /\S/g;
// let search21Result = sentence.match(reg21X);
// let search21Result = sentence.match(reg21X).length;
// console.log(search21Result);

// -------------------------------------------------------------------------------
// Example 22 -> Specifying upper & lower number of matches using the quantity specifiers

// let reg22X = /o{2,4}/;
// let search22Result = reg22X.test(sentence);
// console.log(search22Result);

// let reg22X = /e{3,5}/g;
// let search22Result = sentence.match(reg22X);
// console.log(search22Result);

// -------------------------------------------------------------------------------
// Example 23 -> Specifying only the lower number of matches using the quatity specifiers

// let reg23X = /o{2,}/;
// let search23Result = reg23X.test(sentence);
// console.log(search23Result);

// -------------------------------------------------------------------------------
// Example 24 -> Specifying the exact number of matches using the quantity specifiers

// let reg24X = /o{2}/;
// let search24Result = reg24X.test(sentence);
// console.log(search24Result);
