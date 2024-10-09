function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// Example usage
const array = [5, 2, 9, 1, 5, 6];
const sortedArray = sortDescending(array);
console.log("Sorted array in descending order:", sortedArray);
