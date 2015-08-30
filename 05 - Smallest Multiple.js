// Problem 5. Smallest multiple

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


var x = 20;

// Find all the indivisible numbers of 20, ...
var a = [x];

for (i = x; i--;) {
	var b = a.every(function(j) {
		return (j % i);
	});
	if (b) {
		a.push(i);
	}
}


// Now iterate through the largest number sequence

var j = 1;
var b = false;
var d = x * (x - 1); // step size, has to be a mulitple of largest and second largest numbers, i.e. 19 & 20.
var r = 0;

while (!b) {
	r = d * j++;
	b = a.every(function(j) {
		return !(r % j);
	});
}

console.log(r);