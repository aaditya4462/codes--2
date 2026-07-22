const hello = (callback) => {
    console.log("Hello, world!");
    callback();
}
 
hello(() => {
    console.log("This is a callback function!");
});
 
//parameterized callback function
 
function calculate(num1, num2, callback) {
    const result = num1 + num2;
    callback(result);
}
 
calculate(5, 10, (sum) => {
    console.log(`The sum is: ${sum}`);
});