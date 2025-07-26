//? 👨‍💻 Step 1 Section 1 Easy: JavaScript Interview Question Practice

//! ✅ Question 1: Reverse a String (Basic Logic)

// function reverseStr(str)  {
//     console.log(`Orignal STring ${str}`)
//    let reverced =  str.split('').reverse().join("");
//     console.log(`Reverced String : ${reverced}`)
//     return reverced;

// }

// reverseStr("ayan")

//? ✅ Question 2: Check for Palindrome
// function isPalindrome(str) {
//     console.log("👉 Original String:", str);

//     const reversed = str.split('').reverse().join('');

//     console.log("🔄 Reversed String:", reversed);

//     const result = str === reversed
//      console.log(" Is Palindrome?", result);
//     return result

// }

// isPalindrome("madam");
// isPalindrome("ayan");

//? ✅ Question 3: 🔤 Count vowels in a string;

// function countVowels(str) {
//   console.log(`\n🔍 Analyzing: "${str}"`);
//   let vowels = "aeiou";
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     console.log(`Checking: ${char}`);

//     if (vowels.includes(char)) {
//       count++;
//       console.log(`✅ Found vowel: ${char} (Total: ${count})`);
//     }
//   }

//   console.log(`🔢 Total Vowels in "${str}": ${count}`);
//   return count;
// }

// countVowels("Ayan");
// countVowels("Hello World");

//? ✅ Question 4 :🆙 Capitalize the first letter of each word

// function capitalizeWords(str) {
//     console.log(`🔤 Original: "${str}"`);
//     const word = str.split(" ");

//     const capitalizeWords = word.map((word , index) => {
//        const capital = word.charAt(0).toUpperCase() + word.slice(1);
//         console.log(`Word ${index + 1}: "${word}" ➡️ "${capital}"`);
//         return capital
//     })

//     const result  = capitalizeWords.join(" ");
//      console.log(`✅ Capitalized: "${result}"`);
//      return result;
// }

// capitalizeWords("ayan is learning javascript");

//?✅ Question 5: 5️⃣ – Find the Factorial of a Number

// function factorial(n){
//   console.log(`🔢 Calculating factorial of ${n}`);

//   if(n < 0){
//     console.log("❌ Factorial is not defined for negative numbers");
//     return -1
//   }

//   let result = 1;

//   for(let i = 1 ; i <= n ; i++){
//     result *= i;
//     console.log(`Step ${i}: result = ${result}`);
//   }

//   console.log(`✅ Final Result: ${n}! = ${result}`);
//   return result

// }

// factorial(5)

//? ✅ Question 6 : 🧬 Generate Fibonacci Sequence

// function genreteFibonacci(n) {
//   console.log(`🔢 Generating Fibonacci sequence of ${n} terms:`);
//   let fib = [0,1];

//   if(n <= 0){
//       console.log("❌ Please enter a number greater than 0.");
//       return [];
//   }else if (n === 1) {
//     return [0];
//   }

// for(let i  = 2 ; i < n; i++ ){
//   const next = fib[i - 1] + fib[i - 2];
//   fib.push(next);
//   console.log(`Step ${i}: ${fib.join(", ")}`);

// }
// console.log(`✅ Final Output: ${fib.join(', ')}`);
// return fib;

// }

// genreteFibonacci(6);

//? ✅ Question 7: ➕ Sum of all digits in a number

// function sunOfDigit(number){
//   console.log(`🔢 Input number: ${number}`);
//   let sum = 0 ;

//   let digits = number.toString();

//   for(let i = 0 ; i < digits.length ; i++){
//     const digit = parseInt(digits[i]);
//     sum+= digit;
//     console.log(`➕ Adding: ${digit} → Current Sum: ${sum}`);
//   }
//   console.log(`✅ Total Sum of Digits: ${sum}`);
//   return sum;
// }

// sunOfDigit(123);

// ✅ Question 8: 📄 Count Number of Words in a Sentence

// function countWords(sentence) {
//   let trimmed = sentence.trim("");

//   let words = trimmed.split(/\s+/)

//   let count = words.length;

//   console.log(`📦 Words Array:`, words);
//   console.log(`🔢 Word Count: ${count}`);

//   return count;

// }

// countWords("   Ayan     is learning   JavaScript   ");

//? ✅ Question 9: 🔍 Check if number is prime

// function isPrime(n) {
//   console.log(`🔍 Checking if ${n} is prime`);

//   if (n <= 1) {
//     console.log("❌ Not prime: Must be greater than 1");
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     console.log(`🧪 Trying divisor: ${i}`);
//     if (n % i === 0) {
//       console.log(`❌ Divisible by ${i} → Not Prime`);
//       return false;
//     }
//   }

//   console.log(`✅ ${n} is a prime number`);
//   return true;
// }

// isPrime(4);
// isPrime(7);
// isPrime(9);
// isPrime(3);






//? ✅ Question 10: 🔢 Find the nth prime number

// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }

// function nthPrime(n) {
//   console.log(`🔢 Finding the ${n}th prime number...`);

//   let count = 0; // Prime count found so far
//   let num = 2; // Start checking from 2

//   while (true) {
//     if (isPrime(num)) {
//       count++;
//       console.log(`✅ Prime ${count}: ${num}`);
//     }

//     if (count === n) {
//       console.log(`🎯 The ${n}th prime number is ${num}`);
//       return num;
//     }

//     num++;
//   }
// }

// nthPrime(1);  
// nthPrime(5);  
// nthPrime(10); 


//? ✅ Question 11: 📈 Find the Largest Number in an Array

// function LargestNumber() {
//   let numbers = [3,4,8,10];

//   let largest = numbers[0];

//   for(let i = 1;i<= numbers.length; i++){
//     if(numbers[i] > largest){
// largest = numbers[i];
//     }
    

//   }
//   return largest;
// }


// console.log(LargestNumber());



//? ✅ Question 12: ➗ Find the Greatest Common Divisor (GCD) of Two Numbers
// function gcd(a,b){
//   console.log(`🧮 Finding GCD of ${a} and ${b}`);
// while(b !== 0){
//   console.log(`a = ${a}, b = ${b}`);
//   let temp = b;
//   b = a % b;
//   a = temp;
// }
// console.log(`✅ GCD is: ${a}`);
// return 0 ;
// }

// gcd(12,18)


//? ✅ Question 13: 📈 Find the Secend Largest Number in an Array

// function secendLargestNumber() {
//   let numbers = [2,5,7,9];
//   let largest = -Infinity;
//   let secendLargest = -Infinity;

//   for(let i = 0 ; i < numbers.length; i++){
//     if(numbers[i] > largest){
//       secendLargest = largest;
//       largest = numbers[i];
//     }else if(numbers[i] > secendLargest && numbers[i] !== largest){
//       secendLargest = numbers[i];
//     }
//   }
//   return secendLargest;
// }

// console.log(secendLargestNumber())



//? ✅ Question 14: 📈 Find the Third Largest Number in an Array;
function thirdLargestNumber() {
    let numbers = [2,5,7,9];
  let largest = -Infinity;
  let secendLargest = -Infinity;
  let thirdLargest = -Infinity;

    for(let i = 0 ; i < numbers.length; i++){
    if(numbers[i] > largest){
      thirdLargest = secendLargest;
      secendLargest = largest;
      largest = numbers[i];
    }else if(numbers[i] > secendLargest && numbers[i] !== largest){
      thirdLargest = secendLargest;
      secendLargest = numbers[i];
    }else if(numbers[i] > thirdLargest && secendLargest!== largest && numbers[i] !== largest){
      thirdLargest = numbers[i]
    }
  }
  return thirdLargest;

}

console.log(thirdLargestNumber())


//? 16 :✅ FizzBuzz (1 to 100)

// function fizzbuzz() {
//     for(let i = 1; i<= 100 ;i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FizzBuzz")
//         }
//         else if(i % 3 === 0){
//             console.log("Fizz")
//         }
//          else if(i % 5 === 0){
//             console.log("Buzz")
//         }
//         else console.log(i)
//     }
// }

// fizzbuzz()
