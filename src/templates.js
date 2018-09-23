function greet(name) {
	console.log(`Hello ${name}`.toLowerCase());
}

greet(`Bill`);

function createEmail(to, from, subject, message) {
	console.log(`
		To: ${to}
		From: ${from}
		Subject: ${subject}
		message: ${message}
	`)
}

createEmail('john@mail.com', 'jane@mail.com', 'Hello', 'How are you doing?');

let d = (function add(x, y) {
	return `${x} + ${y} = ${parseInt(x) + parseInt(y)}`
})('5','7')

console.log(d);



let name = 'Bill';

console.log(upperName `Hello ${name}`);

function upperName(literals, value) {
	return literals[0] + value.toUpperCase();
}