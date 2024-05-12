//Set up two different variables with different values
let a: number = 17;
let b: number = 20;

function num(a: number, b: number): number {
    return a + b;
}
function add(a: number, b: number): number {
    return a + b;
}

console.log("Result of first call is :", add(a, b));

let c: number = 10;
let d: number = 20;

console.log("Result of second call:", add(c, d));
