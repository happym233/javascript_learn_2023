/*  Case 1
--------------------------------Requirements--------------------------------
1- At least two letters
2- Numbers should be at the end, if there are any
3- Letters can be either lowercase or uppercase
4- If there are two letters, they cannot contain numbers
*/

// let username = "sdk";
// let username = "sk";
// let username = "k";
// let username = "k9";
// let username = "kk9";
// let username = "9kk";
let username = "JavaScriptRocks3000";

let usernameCheck = /^[A-Za-z]{2,}\d*$/;

let checkStatus = usernameCheck.test(username);
console.log(checkStatus);

/*
^[A-Za-z] -> it matches all letters uppercase and lowercase
{2,}      -> it requires the quantity of the characters to be at least 2 
\d        -> it inserts matches for digits
*         -> it matches the characters that occur zero or more times
$         -> it makes sure the digits are at the end of the username
*/
