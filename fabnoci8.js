let n1=0,n2=4,n3,i,count=0;
console.log(n1+" "+n2)
for (let i=0;i<=count;++i){
    n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;

}
function generateFibonacci(n) {
    let fibonacci = [0, 1];

    // Generate Fibonacci series
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    // Reverse the Fibonacci series
    let reversedFibonacci = fibonacci.slice(0, n).reverse();

    return reversedFibonacci;
}

// Example usage
let numberOfTerms = 10; // You can change this to generate more or fewer terms
let result = generateFibonacci(numberOfTerms);
console.log(result);
