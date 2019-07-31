// 1. Find Highest Number inside an array
// Write a function that takes an array returns highest number of the array


function findmax(array) {
    var max = 0;
    var a = array.length;
    for (counter = 0; counter < a; counter++) {
        if (array[counter] > max) {
            max = array[counter];
        }
    }
    return max;
}
console.log(findmax([57, 847, 119]));


// 2. count words inside a string
// Write a function that takes an and retruns a nmuber of words. ('words leave after space')

// Example input: countWords('Hello World!')
// Example output: "2"

function wordCounter(sentence) {

    return sentence.split(" ").length;
}

console.log(wordCounter("hello world"));



// 3. find number of the letters
// write a function that takes 2 elements one is a letter the other is an array.

// first convert to array to a string. return numbers of the letters inside the string

// Example input: countLetters('e',['Hello','Worlds!'])
// Example output: "1"