let sentence = "The Quick brown fox jumps over the lazy dog";

// Example 1 -> Matching a word in a sentence (case-sensitive) (the test method)

// let reg1X = /dog/;
// let reg1X = /cat/;
// let search1Result = reg1X.test(sentence);
// console.log(search1Result);

// Example 2 -> Matching for Multiple Words (OR|) (case-sensitive) (the test method)

// let reg2X = /dog|fox|brown/;
// let reg2X = /dog|cat|blue/;
// let reg2X = /bird|cat|blue/;
// let search2Result = reg2X.test(sentence);
// console.log(search2Result);

// Example 3 -> Ignoring the case-sensitiveness (using the i flag) (the test method)

// let reg3X = /quick/i;
// let search3Result = reg3X.test(sentence);
// console.log(search3Result);

// Exmaple 6 -> Getting the matched word (the match method)

// let reg4X = /box/i;
// let reg4X = /fox/i;
// let search4Result = sentence.match(reg4X);
// console.log(search4Result);

// Example 5 -> Getting the matched words (using the g flag) (the match method)

// let reg5X = /the/gi;
// let search5Result = sentence.match(reg5X);
// console.log(search5Result);

// Example 6 -> Getting the matched words with the dot (the match method)

// let reg6X = /.o./g;
// let reg6X = /./g;
// let search6Result = sentence.match(reg6X);
// console.log(search6Result);

// Example 7 -> Getting the matched characters with [] (the match method)

// let reg7X = /[bdh]/g;
// let search7Result = sentence.match(reg7X);
// console.log(search7Result);

// Example 8 -> Getting the matched characters of alphabet with [] (the match method)

// let reg8X = /[a-z]/gi;
// let search8Result = sentence.match(reg8X);
// console.log(search8Result);
