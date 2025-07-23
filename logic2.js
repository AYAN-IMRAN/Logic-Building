//? 👨‍💻 Step 1: JavaScript Interview Question Practice
//! ✅ Question 1: Reverse a String (Basic Logic)

// function reverseStr(str)  {
//     console.log(`Orignal STring ${str}`)
//    let reverced =  str.split('').reverse().join("");
//     console.log(`Reverced String : ${reverced}`)
//     return reverced;

// }

// reverseStr("ayan")


//? ✅ Question 2: Check for Palindrome 
function isPalindrome(str) {
    console.log("👉 Original String:", str);

    const reversed = str.split('').reverse().join('');

    console.log("🔄 Reversed String:", reversed);


    const result = str === reversed
     console.log(" Is Palindrome?", result);
    return result
    
}

isPalindrome("madam");
isPalindrome("ayan");