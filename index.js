//Set up two different variables with different values
var a = 17;
var b = 20;
function num(a, b) {
    return a + b;
}
function add(a, b) {
    return a + b;
}
console.log("Result of first call is :", add(a, b));
var c = 10;
var d = 20;
console.log("Result of second call:", add(c, d));
