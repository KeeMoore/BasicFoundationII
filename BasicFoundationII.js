// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".Example: makeItBig([-1, 3, 5, -5]) returns that same array, changed to[-1, "big", "big", -5].
function makeItBig(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
{
const result = makeItBig([1, -2, 3, -4, 5]);
console.log(result); // Output: ["big", -2, "big", -4, "big"]
}
// 2. Print Low, Return High - Create a function that takes in an array of numbers.The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(arr) {
    let min = arr[0];
    let max = arr[0];
    for (const num of arr) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }
    console.log("Lowest value:", min);
    return max;
}
{
// Call the function with an example array
const  result= printLowReturnHigh([10, -5, 8, 3, -2]);
console.log("Highest value:", result);
}


// 3. Print One, Return Another - Build a function that takes in an array of numbers.The function should print the second - to - last value in the array, and return the first odd value in the array.
function printOneReturnAnother(arr) {
    console.log("Second-to-last value:", arr[arr.length - 2]);
    for (const num of arr) {
        if (num % 2 !== 0) {
            return num;
        }
    }
}
{
// Example usage:
const myArray = [2, 4, 6, 7, 10];
const result = printOneReturnAnother(myArray);
console.log("First odd value:", result);
}


// 4. Double Vision - Given an array(similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.Calling double([1, 2, 3]) should return [2, 4, 6] without changing the original array.
function double(arr) {
    const doubledArray = arr.map((num) => num * 2);
    return doubledArray;
}
{
    const originalArray = [1, 2, 3];
const doubledResult = double(originalArray);

console.log("Original array:", originalArray); // [1, 2, 3]
console.log("Doubled array:", doubledResult); // [2, 4, 6]

}

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.Example, countPositives([-1, 1, 1, 1]) changes the original array to[-1, 1, 1, 3] and returns it.
function countPositives(arr) {
    let positiveCount = 0;
    for (const num of arr) {
        if (num > 0) {
            positiveCount++;
        }
    }
    arr[arr.length - 1] = positiveCount;
    return arr;
}
{
    const myArray = [1, -2, 3, -4, 5];
const result = countPositives(myArray);

console.log("Modified array:", result); // [1, -2, 3, -4, 3]

}

// 6. Evens and Odds - Create a function that accepts an array.Every time that array has three odd values in a row, print "That's odd!".Every time the array has three evens in a row, print "Even more so!".
function checkEvensAndOdds(arr) {
    let oddCount = 0;
    let evenCount = 0;

    for (const num of arr) {
        if (num % 2 === 0) {
            evenCount++;
            oddCount = 0;
        } else {
            oddCount++;
            evenCount = 0;
        }

        if (oddCount === 3) {
            console.log("That's odd!");
            oddCount = 0;
        } else if (evenCount === 3) {
            console.log("Even more so!");
            evenCount = 0;
        }
    }
}
{
// Example usage:
let myArray1 = [1, 2, 3, 4, 5];
checkEvensAndOdds(myArray1);
}

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd(arr[1], arr[3], arr[5], etc).Afterward, console.log each array value and return arr.
function incrementSeconds(arr) {
    for (let i = 1; i < arr.length; i += 2) {
        arr[i] += 1;
        console.log(arr[i]);
    }
    return arr;
}
{
// Example usage:
const myArray2 = [10, 20, 30, 40, 50, 60];
const updatedArray = incrementSeconds(myArray2);
console.log("Updated array:", updatedArray);
}

// 8. Previous Lengths - You are passed an array(similar to saying 'takes in an array' or 'given an array') containing strings.Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].Hint: Can for loops only go forward ?
function previousLengths(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}

// Example usage:
const myArray1 = ["hello", "dojo", "awesome"];
const updatedArray1 = previousLengths(myArray1);
console.log(updatedArray1); // ["hello", 5, 4]


// 9. Add Seven - Build a function that accepts an array.Return a new array with all the values of the original, but add 7 to each.Do not alter the original array.Example, addSeven([1, 2, 3]) should return [8, 9, 10] in a new array.

function addSeven(arr) {
    const resultArray = arr.map((num) => num + 7);
    return resultArray;
}

// Example usage:
const myArray2 = [1, 2, 3];
const updatedArray2 = addSeven(myArray2);
console.log(updatedArray2); // [8, 9, 10]


// 10. Reverse Array - Given an array, write a function that reverses its values, in -place.Example: reverse([3, 1, 6, 4, 2]) returns the same array, but now contains values reversed like so...[2, 4, 6, 1, 3].Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArray(arr) {
    const halfLength = Math.floor(arr.length / 2);
    for (let i = 0; i < halfLength; i++) {
        // Swap values without using a temporary variable
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    return arr;
}

// Example usage:
const myArray3 = [3, 1, 6, 4, 2];
const reversedArray = reverseArray(myArray3);
console.log(reversedArray); // [2, 4, 6, 1, 3]


// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative(not simply multiplied by - 1).Given[1, -3, 5], return [-1, -3, -5].

function makeNegative(arr) {
    const negativeArray = arr.map((num) => -Math.abs(num));
    return negativeArray;
}

// Example usage:
const originalArray = [2, -4, 5];
const newArray = makeNegative(originalArray);
console.log(newArray);  // Output: [-2, -4, -5]


// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".If no array values are "food", then print "I'm hungry" once.
function alwaysHungry(arr) {
    let foundFood = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            foundFood = true;
        }
    }
    if (!foundFood) {
        console.log("I'm hungry");
    }
}

// Example usage:
alwaysHungry(["food", "not food", "food"]);  // Output: "yummy", "yummy"
alwaysHungry(["not food", "still not food"]);  // Output: "I'm hungry"


// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third - to - last values, etc.Example: swapTowardCenter([true, 42, "Ada", 2, "pizza"]) turns the array into["pizza", 42, "Ada", 2, true].swapTowardCenter([1, 2, 3, 4, 5, 6]) turns the array into[6, 2, 4, 3, 5, 1].No need to return the array this time.

function swapTowardCenter(arr) {
    let len = arr.length;
    for (let i = 0; i < len / 2; i += 2) {
        let temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }
    console.log(arr);
}

// Example usage:
swapTowardCenter([true, 42, "Ada", 2, "pizza"]);  // Output: ["pizza", 42, "Ada", 2, true]
swapTowardCenter([1, 2, 3, 4, 5, 6]);  // Output: [6, 2, 4, 3, 5, 1]

// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.For example, scaleArray([1, 2, 3], 3) should return [3, 6, 9].
function scaleArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
}

// Example usage:
console.log(scaleArray([1, 2, 3], 3));  // Output: [3, 6, 9]


