function greet(greeting = "Hello", name = "friend") {
	console.log(`${greeting} ${name}`);
}

greet();

function sum() {
	console.log(arguments instanceof Array);

	var sum = 0;

	Array.prototype.forEach.call(arguments, function(value, i, array) {
		sum += value;
	});

	console.log(sum);
}

function sum(...values) {
	console.log(values);

	let sum = 0;

	values.forEach(function (value) {
		sum += value;
	});

	console.log(sum);
}

function sum(...values) {
	console.log(values.reduce(function(preValue, curValue) {
		return preValue + curValue;
	}));
}

sum(5, 7, 2, 10);