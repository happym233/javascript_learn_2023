/* Case 2
-----------------------------Requirements-----------------------------
1- Passwords must be at least 8 characters
2- Passwords must contain at least two consecutive digits
*/
// let password = "cosmictech12345";
// let password = "cosmictech1";
let password = "cosmictecH1225";

let passCheck = /(?=\w{8})(?=\D*\d{2})/;
let checkStatus = passCheck.test(password);
console.log(checkStatus);

/* 
(?=\w{8})  -> a positive lookahead that matches 8 or more letters and digits 
(?=)       -> a positive lookahead
\w         -> matches all letters and numbers and _
{8}        -> a quantity specifier that is looking for the exact number of      occurances which is 8
\D*        -> zero or more occurances of characters that are not digits
\d{2}      -> two consecutive digits
*/
