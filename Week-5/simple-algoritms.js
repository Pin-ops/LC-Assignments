//Simple Algorithms
//1. Reverse text
//Given a string of characters as input, write a function that returns it with the characters reversed. Don't use reverse function, use loops.

//Example input: reverseText(Hello World!)
//Example output: "!dlroW olleH"

function reverseSentence(text) {

    let wordOfText = text;

    console.log(wordOfText);

    let reverseSentence = "";

    for (let i = 0; i < wordOfText.length; i++) {

        let word = wordOfText[i];


        let temp = "";
    }

    let tem = "";

    for (let p = text.length - 1; p >= 0; p--) {

        tem += text[p];

    }
    console.log(tem)

}

reverseSentence("Hello World!")


//2. Palindrome checker
//A palindrome is a word or phrase that reads the same backward as forward. 
//Write a function that checks for this. Don't use reverse function, use loops.

//Example input: isPalindrome('kayak')
//Example output: true

//Example input: isPalindrome('name')
//Example output: false

function palindromeCheck(word) {

    var x = word.length;
    for (var i = 0; i < x / 2; i++) {
        if (word.charAt(i) !== word.charAt(x - 1 - i)) {
            return false;
        }
    }
    return true;
}

palindromeCheck("kayak")

//3. FizzBuzz
//Given a number as an input, print out every integer from 1 to that number. 
//However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, 
//print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”. Use for loops.

//Example input: fizzBuzz(11)
//Example output: [1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz", 11]

function replaceDivision(number) {

    let output = [];

    for (let i = 1; i <= number; i++) {

        if (i % 3 === 0 && i % 2 === 0) {
            output.push("Fizz Buzz");

        } else if (i % 2 === 0) {
            output.push("Fizz");
        } else if (i % 3 === 0) {
            output.push("Buzz");
        } else {
            output.push(i);
        }

        console.log(output);
    }
    return output
}

replaceDivision(11);



//4. Reverse Array
//Given an array of items, reverse the order.Don 't use reverse function, use loops.

//Example input: reverseArray([22, 'hi', 12])
//Example output: [12, 'hi', 22]

function reverseArray(arr) {

    var reversedOne = [];

    while (arr.length) {
        reversedOne.push(arr.pop());
    }

    return reversedOne;
}

console.log(reverseArray([12, "hi", 22]));




//5. Reverse Words
//Given a phrase, reverse the order of the characters of each word.Don 't use reverse function, use loops.

//Example input: reverseWords('I love JavaScript!')
//Example output: 'I evol !tpircSavaJ'
function reverseWordInLine(input) {
    var word = "",
        opposite = "";

    for (var i = input.length - 1; i >= 0; i--) {

        if (input[i] == " ") {
            opposite = " " + word + opposite;
            word = "";
        } else {
            word += input[i];
        }
    }
    return word + opposite;
}
console.log(reverseWordInLine("I don´t like JavaScript!"));


//6. Capitalization
//Given a phrase, capitalize every word.

//Example input: capitalizeWords('i love javaScript!')
//Example output: 'I Love JavaScript!

function titleCase(str) {

    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(" ");
}

console.log(titleCase("i don´t like javascript!"));

//7. Subtract two Sets
//Given two arrays that contains integers, remove the integers of second array from the first.

//Example input: subctractArray([1, 2, 4, 6], [2, 6])
//Example output: [1, 4]

function removeSecondArray(a1, a2) {

    var result = [];

    for (var i = 0; i < a1.length; i++) {

        if (a2.indexOf(a1[i]) === -1) {

            result.push(a1[i]);
        }
    }
    return result;
}

console.log(removeSecondArray([1, 2, 4, 6], [2, 6]));