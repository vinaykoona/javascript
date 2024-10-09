function removeDuplicates(arr) {
    // Using a Set to store unique values
    const uniqueElements = new Set(arr);
    return Array.from(uniqueElements);
}

// Example usage
const array = [5, 2, 10, 1, 1, 6, 2, 10];
const uniqueArray = removeDuplicates(array);
console.log("Unique elements:", uniqueArray);


// A Set is used to automatically handle duplicates since it only stores unique values.
// The Array.from() method is then used to convert the Set back into an array.
// You can replace the array variable with any list of numbers you'd like to process.

