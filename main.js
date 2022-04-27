// NESTED FUNCTIONS SCOPE 
let a = 10;
function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a, b, c);
    }
    inner();
}
outer();
// Output: 10 20 30


// CLOSURES
function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    inner();
}
outer();
outer();
// Output: 1 1

function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}
const fn = outer();
fn();
fn();
// Output: 1 2


// FUNCTION CURRYING